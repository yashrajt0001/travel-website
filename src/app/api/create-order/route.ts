import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import { razorpay } from '@/lib/razorpay';
import { destinations } from '@/lib/destinations';
interface PackageVariant {
  name: string;
  price: number;
  features: string[];
}

interface Package {
  id: string;
  name: string;
  price: number | null;
  features: string[];
  color: string;
  icon: string;
  popular: boolean;
  variants?: PackageVariant[];
  comingSoon?: boolean;
  note: string;
}

interface Destination {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    activities: string[];
  }[];
  travelTips: string[];
  packages: Package[];
  goodFor: string;
  weather: {
    condition: string;
    temp: string;
    humidity: string;
  };
}

interface Destinations {
  [key: string]: Destination;
}

const typedDestinations: Destinations = destinations;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, destination, packageName, amount } = body;
    console.log(name, email, phone, destination, packageName, amount);

    // Validation: Check required fields
    if (!name || !email || !phone || !destination || !packageName || !amount) {
      return NextResponse.json(
        { message: 'Missing required fields: name, email, phone, destination, packageName, amount' },
        { status: 400 }
      );
    }

    // Validation: Find destination key by matching title
    const destinationKey = Object.keys(typedDestinations).find(
      (key) => typedDestinations[key].title === destination
    );

    if (!destinationKey) {
      return NextResponse.json(
        { message: `Invalid destination: ${destination}` },
        { status: 400 }
      );
    }

    // Validation: Check if packageName exists for the destination
    const destinationData = typedDestinations[destinationKey];
    const packageData = destinationData.packages.find(
      (pkg) => pkg.name === packageName
    );

    if (!packageData) {
      return NextResponse.json(
        { message: `Invalid package: ${packageName} for destination ${destination}` },
        { status: 400 }
      );
    }

    // Validation: Check if amount matches package price or its variants
    let isValidAmount = packageData.price === amount;
    if (!isValidAmount && packageData.variants) {
      isValidAmount = packageData.variants.some((variant) => variant.price === amount);
    }

    if (!isValidAmount) {
      return NextResponse.json(
        {
          message: `Invalid amount: ${amount}. Valid amounts for ${packageName} are ${packageData.price}${
            packageData.variants
              ? ` or ${packageData.variants.map((v) => v.price).join(', ')}`
              : ''
          }`,
        },
        { status: 400 }
      );
    }

    // 1. Create booking (store the destination key, not the title)
    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        destination: destinationKey, // Store the key (e.g., "meghalaya-2025")
        packageName,
        amount,
        status: 'PENDING',
      },
    });

    // 2. Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount * 100, // amount in paise
      currency: 'INR',
      receipt: booking.id,
    });

    // 3. Save payment
    await prisma.payment.create({
      data: {
        bookingId: booking.id,
        orderId: order.id,
        razorpayOrder: order.id,
        status: order.status,
      },
    });

    return NextResponse.json({
      // key: process.env.RAZORPAY_KEY_ID,
      key: "rzp_test_qHJgCkKqVfIlsz",
      orderId: order.id,
      amount: amount * 100,
      bookingId: booking.id,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to create order' },
      { status: 500 }
    );
  }
}
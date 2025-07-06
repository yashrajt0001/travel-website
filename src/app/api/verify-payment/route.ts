import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/prisma/client';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      bookingId,
    } = body;

    const expectedSignature = crypto
      // .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .createHmac('sha256', "YPH4lW5W8xYQPnAkAezTdaRV")
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      // Payment verified
      await prisma.payment.update({
        where: { bookingId },
        data: {
          razorpayId: razorpay_payment_id,
          status: 'paid',
        },
      });

      const booking = await prisma.booking.update({
        where: { id: bookingId },
        data: {
          status: 'PAID',
        },
      });

      // --- Send Email to User ---
      // Setup transporter (use your SMTP credentials in .env)
      const transporter = nodemailer.createTransport({
        // host: process.env.SMTP_HOST,
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          // user: process.env.SMTP_USER,
          user: "tarunloharwnsp2017@gmail.com",
          // pass: process.env.SMTP_PASS,
          pass: "brxf xras dqeh ixky",
        },
      });

      // Compose email
      await transporter.sendMail({
        from: `"Antarabodh" <tarunloharwnsp2017@gmail.com>`,
        to: booking.email ?? undefined,
        subject: `Booking Confirmation - ${booking.packageName}`,
        html: `
          <h2>Thank you for your booking, ${booking.name}!</h2>
          <p>Your package: <b>${booking.packageName}</b></p>
          <p>Destination: <b>${booking.destination}</b></p>
          <p>Amount Paid: <b>₹${booking.amount}</b></p>
          <p>Status: <b>${booking.status}</b></p>
          <br/>
          <p>We will contact you soon with further details.</p>
          <p>Regards,<br/>Antarabodh Team</p>
        `,
      });

      return NextResponse.json({ success: true });
    } else {
      // Signature mismatch
      await prisma.booking.update({
        where: { id: bookingId },
        data: { status: 'FAILED' },
      });

      return NextResponse.json(
        { success: false, error: 'Signature mismatch' },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: 'Verification failed' + `: ${err}` },
      { status: 500 }
    );
  }
}
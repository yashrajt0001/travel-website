// // lib/packageValidation.ts

// import { destinations } from "@/app/destinations/[slug]/page";

// // Define types for better type safety
// type PackageVariant = {
//   price: number;
//   [key: string]: any;
// };

// type Package = {
//   id: string;
//   price: number;
//   comingSoon?: boolean;
//   variants?: PackageVariant[];
//   [key: string]: any;
// };

// type Destination = {
//   packages: Package[];
//   [key: string]: any;
// };

// export function validatePackage(
//   destinationSlug: string,
//   packageId: string,
//   amount: number
// ) {
//   const destination: Destination = destinations[destinationSlug];
//   if (!destination) {
//     return { valid: false, error: 'Destination not found' };
//   }

//   const packageItem = destination.packages.find((pkg: Package) => pkg.id === packageId);
//   if (!packageItem) {
//     return { valid: false, error: 'Package not found' };
//   }

//   if (packageItem.comingSoon) {
//     return { valid: false, error: 'Package is not available yet' };
//   }

//   // Check base price
//   if (packageItem.price === amount) {
//     return { valid: true };
//   }

//   // Check variant prices
//   if (packageItem.variants) {
//     const variantMatch = packageItem.variants.some(
//       (variant) => variant.price === amount
//     );
//     if (variantMatch) {
//       return { valid: true };
//     }
//   }

//   return {
//     valid: false,
//     error: `Price mismatch. Expected ${packageItem.price} or variant price`,
//   };
// }
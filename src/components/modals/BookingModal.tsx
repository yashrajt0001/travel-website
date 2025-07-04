"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
// import { s } from "framer-motion/client";
declare global {
  interface Window {
    Razorpay: any; // or RazorpayType if you want to define a custom type
  }
}
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageDetails:
    | {
        id: string;
        name: string;
        price: number;
        features: string[];
        destination: string;
      }
    | undefined;
}

export default function BookingModal({
  isOpen,
  onClose,
  packageDetails,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  function validate() {
    const errs: { email?: string; phone?: string } = {};

    // Phone: 10 digits, numbers only
    if (!/^\d{10}$/.test(formData.phone)) {
      errs.phone = "Enter a valid 10-digit phone number";
    }

    // Email: optional, but if present, must be valid
    if (
      formData.email &&
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      errs.email = "Enter a valid email address";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!packageDetails) {
      setAlert({ type: "error", message: "Package not selected!" });
      setTimeout(() => setAlert({ type: null, message: "" }), 3000);
      return;
    }

    setIsLoading(true);
    try {
      const { name, email, phone } = formData;
      const amount = packageDetails.price;

      // 1. Create order
      const { data } = await axios.post("/api/create-order", {
        name,
        email,
        phone,
        destination: packageDetails.destination,
        packageName: packageDetails.name,
        variantName: null,
        amount,
      });

      const razorpayLoaded = await loadRazorpayScript();
      if (!razorpayLoaded) {
        setAlert({ type: "error", message: "Failed to load Razorpay SDK." });
        setTimeout(() => setAlert({ type: null, message: "" }), 3000);
        return;
      }

      // 2. Razorpay options
      const options = {
        key: data.key,
        amount: data.amount,
        currency: "INR",
        name: "Your Travel Brand",
        description: "Booking Payment",
        order_id: data.orderId,
        handler: async function (response: unknown) {
          const res = response as {
            razorpay_payment_id: string;
            razorpay_order_id: string;
            razorpay_signature: string;
          };
          try {
            // 3. Verify payment
            await axios.post("/api/verify-payment", {
              razorpay_payment_id: res.razorpay_payment_id,
              razorpay_order_id: res.razorpay_order_id,
              razorpay_signature: res.razorpay_signature,
              bookingId: data.bookingId,
            });

            setAlert({
              type: "success",
              message: "Payment Successful! We will contact you shortly.",
            });
            setTimeout(() => {
              setAlert({ type: null, message: "" });
              onClose();
              setFormData({ name: "", phone: "", email: "" });
            }, 3000);
          } catch (error) {
            console.error(error);
            setAlert({
              type: "error",
              message: "Payment verification failed.",
            });
            setTimeout(() => setAlert({ type: null, message: "" }), 3000);
          }
        },
        prefill: {
          name,
          email,
          contact: phone,
        },
        theme: {
          color: "#618940",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.open();
    } catch (error) {
      console.error(error);
      setAlert({
        type: "error",
        message: "Something went wrong during booking.",
      });
      setTimeout(() => setAlert({ type: null, message: "" }), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-lg p-8 max-w-md w-full mx-4"
          >
            {/* Custom Alert */}
            {alert.type && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg ${
                  alert.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                } flex items-center max-w-sm w-full`}
              >
                <span className="mr-2">
                  {alert.type === "success" ? "✅" : "❌"}
                </span>
                <span>{alert.message}</span>
              </motion.div>
            )}

            <h3 className="text-2xl font-serif text-primary mb-6">
              Book Your Journey
            </h3>

            {packageDetails && (
              <div className="mb-6 p-4 bg-primary/5 rounded">
                <p className="font-medium">{packageDetails.name} Package</p>
                <p className="text-primary">₹{packageDetails.price}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border rounded focus:ring-primary focus:border-primary"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-2 border rounded focus:ring-primary focus:border-primary"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded focus:ring-primary focus:border-primary"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-6 py-2 bg-primary border text-black rounded hover:bg-primary/90 flex items-center ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:cursor-pointer"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Book Now"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

async function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (document.querySelector('script[src*="razorpay.com"]'))
      return resolve(true);

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

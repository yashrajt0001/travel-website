"use client";

import axios from "axios";
import { em } from "framer-motion/client";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function EnquirySection({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    let valid = true;
    const newErrors: { phone?: string; email?: string } = {};
    // Phone: allow 10-15 digits, optional +, spaces, dashes, parentheses
    const phoneRegex = /^([+]?\d{1,3}[\s-]?)?(\(?\d{3,5}\)?[\s-]?)?\d{3,5}[\s-]?\d{3,5}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number.";
      valid = false;
    }
    // Email: basic email regex
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const response = await axios.post("/api/enquiry", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        discription: formData.message,
      });
      if (response.status === 200) {
        alert("Thank you for your enquiry! We will get back to you soon.");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setErrors({});
      } else {
        alert("There was an error submitting your enquiry. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting enquiry:", err);
      alert("There was an error submitting your enquiry. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-extrabold text-[var(--primary)] text-3xl md:text-4xl font-serif mb-4">
              {title ? title : "Have any enquiry?"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {description
                ? description
                : "Have questions about our wellness travel experiences? Fill out the form below and our travel experts will get back to you shortly."}
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="+1 (123) 456-7890"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="john@gmail.com"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us about your travel interests or any questions you have..."
                required
              ></textarea>
            </div>
            <div className="text-center flex justify-center space-x-4">
              <button
                type="submit"
                className="inline-flex cursor bg-[var(--secondary)] items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                disabled={loading}
              >
                {loading ? (
                  <svg className="animate-spin mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                ) : (
                  <FiSend className="mr-2" />
                )}
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

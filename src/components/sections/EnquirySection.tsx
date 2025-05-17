"use client";

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
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    // Here you would typically handle the form submission to your backend
    alert("Thank you for your enquiry! We will get back to you soon.");
    setFormData({ name: "", phone: "", message: "" });
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+1 (123) 456-7890"
                  required
                />
              </div>
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
              >
                <FiSend className="mr-2" />
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

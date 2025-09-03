"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

// Package options
const packages = [
  { title: "Starter", price: "£149" },
  { title: "Professional", price: "£299" },
  { title: "Premium", price: "£499+" },
];

// Add-ons options
const addOnsOptions = [
  { label: "Instagram/Facebook ad campaigns: +£150/month", value: "ads" },
  { label: "Custom graphics & video content: +£200", value: "graphics" },
  { label: "Influencer collaboration: +£250", value: "influencer" },
];

export default function SocialMediaContactForm() {
  const [state, handleSubmit] = useForm("mandlwkd"); // Replace with your Formspree form ID
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const handleAddOnChange = (value: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  if (state.succeeded) {
    return (
      <p className="text-green-400 text-center text-xl font-semibold">
        ✅ Thanks for your inquiry! We'll get back to you soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-white max-w-md mx-auto"
      noValidate
    >
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
          required
          className="w-full rounded-lg border border-indigo-500 bg-indigo-800 text-white px-4 py-2 placeholder:text-gray-300"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 mt-1 text-sm"
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-lg border border-indigo-500 bg-indigo-800 text-white px-4 py-2 placeholder:text-gray-300"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Your message"
          required
          className="w-full rounded-lg border border-indigo-500 bg-indigo-800 text-white px-4 py-2 placeholder:text-gray-300"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-400 mt-1 text-sm"
        />
      </div>

      {/* Package Selection */}
      <div>
        <label className="block text-sm font-medium mb-2">Select a Package</label>
        <div className="space-y-2 pl-2">
          {packages.map((pkg) => (
            <label key={pkg.title} className="flex items-center gap-2">
              <input
                type="radio"
                name="package"
                value={`${pkg.title} - ${pkg.price}`}
                checked={selectedPackage === pkg.title}
                onChange={() => setSelectedPackage(pkg.title)}
                className="accent-purple-500 w-5 h-5"
                required
              />
              {pkg.title} – {pkg.price}
            </label>
          ))}
        </div>
      </div>

      {/* Add-Ons */}
      <div>
        <label className="block text-sm font-medium mb-2">Optional Add-Ons</label>
        <div className="space-y-2 pl-2">
          {addOnsOptions.map((addon) => (
            <label key={addon.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={addon.value}
                checked={selectedAddOns.includes(addon.value)}
                onChange={() => handleAddOnChange(addon.value)}
                className="accent-purple-500 w-5 h-5"
              />
              {addon.label}
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 disabled:opacity-50 w-full"
      >
        {state.submitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

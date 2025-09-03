"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const packages = [
  { title: "Starter", price: "£99", color: "green" },
  { title: "Professional", price: "£199", color: "blue" },
  { title: "Premium", price: "£299+", color: "purple" },
];

const addOnsOptions = [
  { label: "Instagram/Facebook ad campaigns: +£150/month", value: "ads" },
  { label: "Custom graphics & video content: +£200", value: "graphics" },
  { label: "Influencer collaboration: +£250", value: "influencer" },
];

export default function SocialMediaContactForm() {
  const [state, handleSubmit] = useForm("xnnboqqj"); // Replace with your Formspree form ID
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const handleAddOnChange = (value: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  if (state.succeeded) {
    return (
      <p className="text-green-400 font-semibold text-lg text-center">
        Thanks for joining! We'll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto text-white">

      {/* Email */}
      <label htmlFor="email" className="font-medium text-white">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="p-3 rounded-md border border-gray-300 bg-transparent text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-white" />

      {/* Name */}
      <label htmlFor="name" className="font-medium text-white">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        required
        className="p-3 rounded-md border border-gray-300 bg-transparent text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      {/* Message */}
      <label htmlFor="message" className="font-medium text-white">Message</label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        className="p-3 rounded-md border border-gray-300 bg-transparent text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-white" />

      {/* Package selection */}
      <fieldset className="border border-gray-300 rounded-md p-4 mt-2 text-white">
        <legend className="font-medium mb-2 text-white">Select Package</legend>
        <div className="flex flex-col gap-2">
          {packages.map((pkg) => (
            <label key={pkg.title} className="flex items-center gap-2 text-white">
              <input
                type="radio"
                name="package"
                value={pkg.title}
                checked={selectedPackage === pkg.title}
                onChange={() => setSelectedPackage(pkg.title)}
                className="accent-purple-500 w-5 h-5"
                required
              />
              {pkg.title} - {pkg.price}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Add-Ons */}
      <fieldset className="border border-gray-300 rounded-md p-4 mt-2 text-white">
        <legend className="font-medium mb-2 text-white">Optional Add-Ons</legend>
        <div className="flex flex-col gap-2">
          {addOnsOptions.map((addon) => (
            <label key={addon.value} className="flex items-center gap-2 text-white">
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
      </fieldset>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all mt-4"
      >
        Submit
      </button>
    </form>
  );
}

"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ConsultationServicesContactForm() {
  const [state, handleSubmit] = useForm("mgvyzneg");

  if (state.succeeded) {
    return <p className="text-center text-green-400 font-semibold text-lg">Thanks for joining!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 max-w-lg w-full mx-auto px-4 sm:px-0 text-white"
      aria-label="Consultation Services Contact Form"
    >
      {/* Email */}
      <label htmlFor="email" className="block mb-2 font-medium">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="you@example.com"
        className="w-full border border-gray-300 rounded px-4 py-3 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 mt-1" />

      {/* Type of Service Requested */}
      <label htmlFor="service" className="block mb-2 font-medium">
        Type of Service Requested
      </label>
      <select
        id="service"
        name="service"
        required
        defaultValue=""
        className="w-full border border-gray-300 rounded px-4 py-3 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="" disabled className="text-gray-400">
          -- Please choose an option --
        </option>
        <option value="Free Teir Consultation" className="text-black">Free Teir Consultation</option>
        <option value="Basic Consultation" className="text-black">Basic Consultation</option>
        <option value="Advanced Consultation" className="text-black">Advanced Consultation</option>
        <option value="Premium Consultation" className="text-black">Premium Consultation</option>
        <option value="VIP Consultation" className="text-black">VIP Consultation</option>
        <option value="Other" className="text-black">Other</option>
      </select>
      <ValidationError prefix="Service" field="service" errors={state.errors} className="text-red-400 mt-1" />

      {/* Message */}
      <label htmlFor="message" className="block mb-2 font-medium">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={6}
        placeholder="Your message here..."
        className="w-full border border-gray-300 rounded px-4 py-3 bg-transparent text-white placeholder-gray-300 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 mt-1" />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50 transition"
      >
        Submit
      </button>
    </form>
  );
}

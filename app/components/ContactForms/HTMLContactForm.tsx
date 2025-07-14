"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function HTMLContactForm() {
  const [state, handleSubmit] = useForm("mrbklbla");

  if (state.succeeded) {
    return (
      <p className="text-green-400 text-center text-xl font-semibold">
        ✅ Thanks for joining!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-lg mx-auto p-6 bg-indigo-900 rounded-xl text-white"
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
          required
          placeholder="you@example.com"
          className="w-full rounded-lg border border-indigo-500 bg-indigo-800 px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 mt-1 text-sm"
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
          required
          rows={5}
          placeholder="Your message here..."
          className="w-full rounded-lg border border-indigo-500 bg-indigo-800 px-4 py-2 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-400 mt-1 text-sm"
        />
      </div>

      {/* Level Selection */}
      <div>
        <label htmlFor="level" className="block text-sm font-medium mb-1">
          Different Levels *
        </label>
        <select
          id="level"
          name="level"
          required
          defaultValue=""
          className="w-full rounded-lg border border-indigo-500 bg-indigo-800 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
        >
          <option value="" disabled className="text-gray-400">
            -- Select a level --
          </option>
          <option value="Starter" className="text-black">
            Starter
          </option>
          <option value="Professional" className="text-black">
            Professional
          </option>
          <option value="Premium" className="text-black">
            Premium
          </option>
        </select>
        <ValidationError
          prefix="Level"
          field="level"
          errors={state.errors}
          className="text-red-400 mt-1 text-sm"
        />
      </div>

      {/* Add-Ons Checkboxes */}
      <fieldset className="space-y-3 mt-6 border-t border-indigo-700 pt-4">
        <legend className="text-lg font-semibold mb-3">Add-Ons</legend>

        {[
          "E-commerce-ready HTML templates: +£250",
          "Newsletter signup integration: +£200",
          "Multilingual static site support: +£150",
          "Monthly updates + hosting support: £150/mo",
          "JavaScript functionality (modals, sliders, form validation, etc.): +£200",
          "Remove WaterMark: +£150",
        ].map((addon) => (
          <label
            key={addon}
            className="flex items-center gap-3 text-white cursor-pointer"
          >
            <input
              type="checkbox"
              name="addons"
              value={addon}
              className="accent-purple-500 rounded"
            />
            {addon}
          </label>
        ))}
      </fieldset>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full w-full transition-transform transform hover:scale-105 disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}

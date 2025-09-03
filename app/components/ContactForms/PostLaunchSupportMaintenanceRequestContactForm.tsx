"use client";

import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function NextContactForm() {
  const [state, handleSubmit] = useForm("mzzgvaql");
  const formRef = useRef<HTMLFormElement>(null);

  if (state.succeeded) {
    return (
      <p className="text-green-400 text-center text-xl font-semibold">
        ✅ Thanks for reaching out! I’ll get back to you soon.
      </p>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 text-white"
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
          className="w-full rounded-lg border border-indigo-500 bg-indigo-800 text-white px-4 py-2"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-400 mt-1 text-sm"
        />
      </div>

      {/* Package Selection */}
      <div>
        <label htmlFor="package" className="block text-sm font-medium mb-1">
          Package
        </label>
        <select
          id="package"
          name="package"
          required
          className="w-full rounded-lg border border-indigo-500 bg-indigo-800 text-white px-4 py-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select a package
          </option>
          <option value="Bug Fixes- £120 per fix/£250 per-month">🔴 Bug Fixes- £120 per fix/£250 per-month</option>
          <option value="Performance Tuning £350 one-time/ £450 per-month">⚪Performance Tuning £350 one-time/ £450 per-month</option>
          <option value="Site & App Updates £150 month/ £1500 year">🟣 Site & App Updates £150 month/ £1500 year</option>
          <option value="Continuous Assistance £200 month">🟢 Continuous Assistance £200 month</option>
        </select>
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
          required
          className="w-full rounded-lg border border-indigo-500 bg-indigo-800 text-white px-4 py-2"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-400 mt-1 text-sm"
        />
      </div>

      {/* Removed icon button */}

      {/* Submit Button */}
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

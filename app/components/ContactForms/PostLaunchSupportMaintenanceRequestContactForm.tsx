"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function PostLaunchSupportMaintenanceRequestContactForm() {
  const [state, handleSubmit] = useForm("mzzgvaql");

  if (state.succeeded) {
    return (
      <p className="text-green-600 font-semibold text-lg text-center">
        ✅ Thanks for getting in touch! We'll follow up shortly.
      </p>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-800 px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-white/10 border border-white/20 text-white p-8 sm:p-10 rounded-2xl shadow-2xl max-w-2xl w-full space-y-8"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">📩 Request Ongoing Support</h2>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email Address *</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full bg-white/20 text-white placeholder-white/80 border border-white/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block font-medium mb-1">Message / Additional Notes</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full bg-white/20 text-white placeholder-white/80 border border-white/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Services */}
        <fieldset className="space-y-2">
          <legend className="font-medium mb-1">Which service(s) do you need? *</legend>
          {["Bug Fixes", "Performance Tuning", "Regular Updates", "Ongoing Support", "Full Maintenance Package"].map(service => (
            <div key={service} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={service}
                name="services[]"
                value={service}
                className="accent-purple-500"
              />
              <label htmlFor={service}>{service}</label>
            </div>
          ))}
        </fieldset>

        {/* Contact Method */}
        <fieldset className="space-y-2">
          <legend className="font-medium mb-1">Preferred Contact Method *</legend>
          {["Email", "Phone", "WhatsApp", "Zoom/Video Call"].map(method => (
            <div key={method} className="flex items-center space-x-2">
              <input
                type="radio"
                id={method}
                name="contactMethod"
                value={method}
                required
                className="accent-blue-500"
              />
              <label htmlFor={method}>{method}</label>
            </div>
          ))}
        </fieldset>

        {/* Preferred Time */}
        <div>
          <label htmlFor="preferredTime" className="block font-medium mb-1">Preferred Time for a Follow-up</label>
          <input
            id="preferredTime"
            name="preferredTime"
            type="time"
            className="w-full bg-white/20 text-white placeholder-white/80 border border-white/30 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Quote */}
        <fieldset className="space-y-2">
          <legend className="font-medium mb-1">Would you like a custom quote?</legend>
          <div className="flex items-center space-x-2">
            <input type="radio" id="quoteYes" name="customQuote" value="Yes" className="accent-green-500" />
            <label htmlFor="quoteYes">Yes</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="radio" id="quoteNo" name="customQuote" value="No" className="accent-red-500" />
            <label htmlFor="quoteNo">No</label>
          </div>
        </fieldset>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={state.submitting}
            className=" cursor-pointer bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-transform transform hover:scale-105 disabled:opacity-50"
          >
            🚀 Submit
          </button>
        </div>
      </form>
    </div>
  );
}

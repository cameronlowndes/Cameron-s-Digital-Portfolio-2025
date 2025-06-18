"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function HTMLContactForm() {
  const [state, handleSubmit] = useForm("mrbklbla");

  if (state.succeeded) {
    return <p className="text-white text-center text-lg font-semibold">Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-6 bg-indigo-900 rounded-xl text-white">
      <label htmlFor="email" className="block font-semibold">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="w-full px-3 py-2 rounded border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        placeholder="you@example.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 mt-1" />

      <label htmlFor="message" className="block font-semibold">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        className="w-full px-3 py-2 rounded border border-white bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
        placeholder="Your message here..."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 mt-1" />

      <label htmlFor="level" className="block font-semibold">
        Different Levels *
      </label>
      <select
        id="level"
        name="level"
        required
        defaultValue=""
        className="w-full px-3 py-2 rounded border border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
      >
        <option value="" disabled className="text-gray-400">
          -- Select a level --
        </option>
        <option value="Starter" className="text-black">Starter</option>
        <option value="Professional" className="text-black">Professional</option>
        <option value="Premium" className="text-black">Premium</option>
      </select>
      <ValidationError prefix="Level" field="level" errors={state.errors} className="text-red-400 mt-1" />

      <fieldset className="space-y-2 mt-4 border-t border-indigo-700 pt-4">
        <legend className="font-semibold mb-2">Add-Ons</legend>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="addons"
            value="E-commerce-ready HTML templates: +£250"
            className="accent-purple-500"
          />
          E-commerce-ready HTML templates: +£250
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="addons"
            value="Newsletter signup integration: +£200"
            className="accent-purple-500"
          />
          Newsletter signup integration: +£200
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="addons"
            value="Multilingual static site support: +£150"
            className="accent-purple-500"
          />
          Multilingual static site support: +£150
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="addons"
            value="Monthly updates + hosting support: £150/mo"
            className="accent-purple-500"
          />
          Monthly updates + hosting support: £150/mo
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="addons"
            value="JavaScript functionality (modals, sliders, form validation, etc.): +£200"
            className="accent-purple-500"
          />
          JavaScript functionality (modals, sliders, form validation, etc.): +£200
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="addons"
            value="Remove WaterMark: +£150"
            className="accent-purple-500"
          />
          Remove WaterMark: +£150
        </label>
      </fieldset>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg mt-6 w-full disabled:opacity-50 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
}

"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdkzdkav");
  if (state.succeeded) {
    return (
      <p className="text-center text-green-600 text-xl font-semibold">
        Thanks for joining!
      </p>
    );
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-md border border-gray-200"
      noValidate
    >
      <label htmlFor="email" className="font-medium text-gray-700">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="you@example.com"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="font-medium text-gray-700">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={6}
        className="border border-gray-300 rounded-md p-3 resize-y focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Write your message here..."
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-indigo-600 text-white font-semibold rounded-md py-3 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Submit
      </button>
    </form>
  );
}

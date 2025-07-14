"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { useForm } from "@formspree/react";

type FormspreeError = {
  field: string;
  message: string;
};

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mdkzdkav");

  // Controlled form state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [localErrors, setLocalErrors] = useState<{ email: string; message: string }>({
    email: "",
    message: "",
  });

  // Clear local errors and inputs after successful submit
  useEffect(() => {
    if (state.succeeded) {
      setEmail("");
      setMessage("");
      setLocalErrors({ email: "", message: "" });
    }
  }, [state.succeeded]);

  // Validate inputs
  const validate = (): boolean => {
    let errors = { email: "", message: "" };
    let valid = true;

    if (!email.trim()) {
      errors.email = "Email is required.";
      valid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email.trim())) {
      errors.email = "Invalid email address.";
      valid = false;
    }

    if (!message.trim()) {
      errors.message = "Message is required.";
      valid = false;
    }

    setLocalErrors(errors);
    return valid;
  };

  // Submit handler with validation
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    // Call Formspree's handleSubmit if valid
    handleSubmit(e);
  };

  // Helper to find error messages from Formspree API errors safely
  const findErrorMessage = (field: string): string | null => {
    if (!Array.isArray(state.errors)) return null;
    const errObj = (state.errors as FormspreeError[]).find((e) => e.field === field);
    return errObj ? errObj.message : null;
  };

  if (state.succeeded) {
    return (
      <p className="text-center text-green-600 text-2xl font-extrabold tracking-wide animate-fadeIn">
        Thanks for reaching out! I’ll get back to you shortly.
        <style jsx>{`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in forwards;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-xl mx-auto flex flex-col gap-8 bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-2xl border border-indigo-400/30 p-10 text-black"
      noValidate
    >
      <label
        htmlFor="email"
        className="font-semibold text-indigo-900 text-lg tracking-wide"
      >
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value.trimStart())}
        placeholder="you@example.com"
        className={`border rounded-xl p-4 text-indigo-900 placeholder-indigo-400 
          focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 transition duration-300 shadow-sm ${
            localErrors.email ? "border-red-500 focus:ring-red-400" : "border-indigo-300"
          }`}
      />
      {(localErrors.email || findErrorMessage("email")) && (
        <p className="text-red-500 text-sm mt-1">
          {localErrors.email || findErrorMessage("email")}
        </p>
      )}

      <label
        htmlFor="message"
        className="font-semibold text-indigo-900 text-lg tracking-wide"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
        placeholder="Write your message here..."
        className={`border rounded-xl p-4 resize-y text-indigo-900 placeholder-indigo-400 
          focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-opacity-50 transition duration-300 shadow-sm ${
            localErrors.message ? "border-red-500 focus:ring-red-400" : "border-indigo-300"
          }`}
      />
      {(localErrors.message || findErrorMessage("message")) && (
        <p className="text-red-500 text-sm mt-1">
          {localErrors.message || findErrorMessage("message")}
        </p>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className=" cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl py-4
          hover:from-purple-700 hover:to-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed
          transition-all duration-300 shadow-lg"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

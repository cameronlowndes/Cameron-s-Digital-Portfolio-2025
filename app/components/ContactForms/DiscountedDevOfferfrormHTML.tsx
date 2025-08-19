"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function DiscountedDevOfferForm() {
  const [state, handleSubmit] = useForm("xovloqka");

  const serviceTiers = ["Starter", "Professional","Ultimate"];

const addOns = [
  { id: "ecommerce", name: "E-commerce-ready templates", price: "+£200" },
  { id: "newsletter", name: "Newsletter signup integration", price: "+£200" },
  { id: "multilingual", name: "Multilingual static site support", price: "+£150/month" },
  { id: "updatesHosting", name: "Monthly updates + hosting support", price: "+£120/month" },
  { id: "javascript", name: "JavaScript functionality (sliders, modals, validation)", price: "+£200" },
  { id: "removeWatermark", name: "Remove watermark", price: "+£150" },
];


  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  if (state.succeeded) {
    return <p className="text-green-600 text-center mt-4">Thanks for joining!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Services & Contact</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Service Tier Select */}
        <div>
          <label htmlFor="serviceTier" className="block font-medium mb-1">
            Select a Service Tier
          </label>
          <select
            id="serviceTier"
            name="Service Tier"
            required
            defaultValue=""
            className="w-full rounded px-3 py-2 bg-black text-white border border-gray-700"
          >
            <option value="" disabled>
              -- Choose a tier --
            </option>
            {serviceTiers.map((tier) => (
              <option key={tier} value={tier}>
                {tier}
              </option>
            ))}
          </select>
          <ValidationError prefix="Service Tier" field="Service Tier" errors={state.errors} />
        </div>

        {/* Custom Add-Ons Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <label className="block font-medium mb-1">Select Add-Ons (optional)</label>
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            tabIndex={0}
            className="w-full bg-black text-white border border-gray-700 rounded px-3 py-2 cursor-pointer select-none"
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
          >
            {selectedAddOns.length === 0
              ? "-- Choose add-ons --"
              : selectedAddOns
                  .map((id) => {
                    const found = addOns.find((a) => a.id === id);
                    return found ? `${found.name} (${found.price})` : "";
                  })
                  .filter(Boolean)
                  .join(", ")}
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <ul
              role="listbox"
              className="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-gray-700 bg-black text-white shadow-lg"
            >
              {addOns.map(({ id, name, price }) => (
                <li
                  key={id}
                  role="option"
                  aria-selected={selectedAddOns.includes(id)}
                  className={`flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-800 ${
                    selectedAddOns.includes(id) ? "bg-gray-700" : ""
                  }`}
                  onClick={() => toggleAddOn(id)}
                >
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(id)}
                    onChange={() => toggleAddOn(id)}
                    className="cursor-pointer"
                    tabIndex={-1}
                  />
                  <span>
                    {name} <span className="font-semibold">{price}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Hidden inputs for form submission */}
          {selectedAddOns.map((id) => {
            const found = addOns.find((a) => a.id === id);
            return (
              <input
                key={id}
                type="hidden"
                name="Add-Ons"
                value={found ? `${found.name} (${found.price})` : ""}
              />
            );
          })}
          <ValidationError prefix="Add-Ons" field="Add-Ons" errors={state.errors} />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={state.submitting}
          className=" cursor-pointer bg-blue-600 text-white rounded py-2 font-semibold hover:bg-blue-700 disabled:bg-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

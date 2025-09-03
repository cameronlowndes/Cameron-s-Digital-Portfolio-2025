// components/ServiceCard.tsx
import React from "react";
import { CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  price: string;
  features: string[];
  gradient: string; // Tailwind gradient class
}

export default function ServiceCard({ title, price, features, gradient }: ServiceCardProps) {
  return (
    <div
      className={`p-8 rounded-3xl shadow-xl text-white transform transition hover:scale-105 hover:shadow-2xl ${gradient}`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-3xl font-extrabold mb-6">{price}</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-white" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

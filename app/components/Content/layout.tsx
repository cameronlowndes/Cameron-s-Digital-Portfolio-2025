// app/layouts/ServiceLayout.tsx
"use client";

import React, { ReactNode } from "react";

interface ServiceLayoutProps {
  children: ReactNode;
}

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-purple-900 via-indigo-900 to-pink-900 text-white px-6 pt-24">
      <main className="max-w-7xl mx-auto w-full">{children}</main>
    </div>
  );
}

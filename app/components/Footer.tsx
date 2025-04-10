// components/Footer.tsx

import React from "react";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`bg-gray-800 text-white py-4 ${className}`}>
      <div className="text-center">
        <p>© 2025 Cameron Lowndes. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

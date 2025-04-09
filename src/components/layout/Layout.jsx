import React from "react";
import ThemeToggle from "../ui/ThemeToggle";

// Layout component - pure app ka main structure
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 flex flex-col">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {children}
    </div>
  );
};

export default Layout;

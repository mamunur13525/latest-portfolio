"use client";

import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import images from "@/app/Assets/ImagesUrls";

// Assume twMerge is available or just use standard Tailwind classes for this example
// Since twMerge isn't imported from a local source, I'll rely on pure Tailwind for clarity.

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skill", href: "#skill" },
  { name: "Tips", href: "#tips" },
  { name: "Contact", href: "#contact" },
];

// Component for the pill-shaped, blurry navigation bar
const BlurryNavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    // Outer Nav Container: Centered Pill Shape (Lucide Glass effect)
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-8 md:px-6 py-3 w-11/12 shadow-2xl shadow-indigo-900/50 rounded-full bg-white/10 backdrop-blur-3xl transition-all duration-300"
    >
      {/* Inner Content Wrapper: Flex layout for Left | Middle | Right (Adjusted spacing for responsiveness) */}
      <div className="flex items-center justify-between space-x-4 md:space-x-8 lg:space-x-12">
        <div className="w-7 h-7">
          {/* 1. Left Side: Name/Logo */}
          <Image
            className="w-full h-full"
            src={images.logo}
            alt="logo"
            width={40}
            height={40}
          />
        </div>

        {/* 2. Middle: Navigation Items (hidden on small screens) */}
        <ul className="hidden md:flex space-x-1 md:space-x-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="
                  text-white text-xs md:text-sm font-semibold 
                  px-2 py-1 md:px-3 md:py-1.5                  
                  rounded-full 
                  hover:bg-white/20 hover:text-cyan-300 /* Subtle glass hover effect */
                  active:bg-white/30 
                  transition-all duration-200 
                  block
                  whitespace-nowrap
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile: Hamburger + optional small Download button */}
        <div className="flex items-center md:hidden space-x-2">
          <Button className="whitespace-nowrap rounded-full gap-2 sm:inline-flex">
            Download
          </Button>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="relative z-50 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
          >
            {/* Hamburger icon animated to X */}
            <svg
              className={`h-6 w-6 transform transition-transform duration-200 ${
                open ? "rotate-90" : "rotate-0"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12" // X
                    : "M4 6h16M4 12h16M4 18h16" // hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile sliding menu panel */}
      <div
        className={`md:hidden fixed inset-0 z-40 top-0 left-0 w-full h-full transition-all duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        
        {/* Menu content */}
        <div className="relative h-full w-full flex items-center justify-center">
          <ul className="flex flex-col items-center space-y-6 p-8">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.name}
                style={{
                  transition: "transform 280ms ease, opacity 280ms ease",
                  transform: open ? "translateY(0)" : "translateY(-12px)",
                  opacity: open ? 1 : 0,
                  transitionDelay: `${i * 70}ms`,
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-white text-2xl font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* Download Resume button for mobile fullscreen menu */}
            <li
              style={{
                transition: "transform 280ms ease, opacity 280ms ease",
                transform: open ? "translateY(0)" : "translateY(-12px)",
                opacity: open ? 1 : 0,
                transitionDelay: `${NAV_ITEMS.length * 70}ms`,
              }}
            >
              <Button 
                className="mt-4 whitespace-nowrap rounded-full gap-2 text-lg px-8 py-3"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BlurryNavBar;

"use client";

import { useEffect, useState } from "react";
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
    <>
      <nav
        className={`font-popping fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-8 md:px-6 py-3 w-11/12 lg:max-w-[1000px] shadow-2xl shadow-indigo-900/50 bg-[#01fce8]/5 backdrop-blur-3xl border border-[#01fce8]/10 transition-all duration-300 ${
          open ? "rounded-none" : "rounded-full"
        }`}
      >
        {/* Inner Content Wrapper: Flex layout for Left | Middle | Right (Adjusted spacing for responsiveness) */}
        <div className="flex items-center justify-between ">
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
                  className="text-white text-xs md:text-sm  px-2 py-1 md:px-3 md:py-1.5 rounded-full hover:bg-white/20 hover:text-[#feb327] active:bg-white/30 transition-all duration-200 block whitespace-nowrap"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button className="hidden md:block whitespace-nowrap rounded-full">
            Resume
          </Button>
          {/* Mobile: Hamburger + optional small Download button */}
          <div className="flex items-center md:hidden space-x-2">
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
      </nav>
      {/* Mobile full-screen menu panel (slides down from top) */}
      <div
        className={`md:hidden  fixed z-60 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto   left-0 top-0 h-screen w-screen opacity-100"
            : "pointer-events-none h-fit opacity-0"
        } p-0`}
      >
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="absolute top-9 right-15 z-50 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
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

        {/* Backdrop (fades) */}
        <div
          className={`absolute top-0 left-0 w-full h-full  bg-black   backdrop-blur-sm transition-opacity duration-300 -translate-y-1/2 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1/2"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Sliding panel: full screen, translateY from -100% -> 0 */}
        <div
          className={`h-screen w-screen transition-transform duration-500 ease-out px-10 ${
            open ? "translate-y-0" : "-translate-y-1/2"
          }`}
        >
          {/* Slide ul li items */}
          <ul className="flex flex-col items-center justify-center h-full space-y-6 py-6">
            {NAV_ITEMS.map((item, i) => (
              <li
                key={item.name}
                className="w-full text-center group duration-300"
                style={{
                  transition: "transform 320ms ease, opacity 320ms ease",
                  transform: open ? "translateY(0)" : "translateY(-12px)",
                  opacity: open ? 1 : 0,
                  // start delay 300ms, then stagger each item by 100ms
                  transitionDelay: `${300 + i * 100}ms`,
                }}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="w-full block text-white group-hover:text-[#01fce8] duration-300 text-2xl font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Download Resume button for mobile fullscreen menu */}
            <li
              style={{
                transition: "transform 320ms ease, opacity 320ms ease",
                transform: open ? "translateY(0)" : "translateY(-12px)",
                opacity: open ? 1 : 0,
                // download button appears after the items: base 300ms + stagger per item
                transitionDelay: `${300 + NAV_ITEMS.length * 100}ms`,
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
    </>
  );
};

export default BlurryNavBar;

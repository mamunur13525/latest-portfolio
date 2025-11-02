import React from "react";
import Button from "../ui/Button";

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
  return (
    // Outer Nav Container: Centered Pill Shape (Lucide Glass effect)
    <nav
      className="
        fixed top-6 left-1/2 transform -translate-x-1/2 
        z-50 px-3 md:px-6 py-3 w-auto                        
        shadow-2xl shadow-indigo-900/50 /* Deeper shadow for floating effect */
        rounded-full 
        
        bg-white/10                   
        backdrop-blur-3xl               
        border border-white/20         
        ring-2 ring-inset ring-white/30 
        transition-all duration-300
      "
    >
      {/* Inner Content Wrapper: Flex layout for Left | Middle | Right (Adjusted spacing for responsiveness) */}
      <div className="flex items-center justify-between space-x-4 md:space-x-8 lg:space-x-12">
        {/* 1. Left Side: Name/Logo */}
        <div className="text-lg md:text-xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 pr-2 whitespace-nowrap">
          MAMUN
        </div>

        {/* 2. Middle: Navigation Items */}
        <ul className="flex space-x-1 md:space-x-4">
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

        {/* 3. Right Side: Download Button (Now a Glass Button) */}
        <Button className="!bg-[#c9ab04] !text-black whitespace-nowrap rounded-full gap-2">
          Download Resume
        </Button>
      </div>
    </nav>
  );
};

export default BlurryNavBar;

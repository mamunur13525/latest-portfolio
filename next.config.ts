import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    // For Next.js 13 and later, the recommended approach is remotePatterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io", // <--- ADD THIS HOSTNAME
        // You can optionally add port and pathname here if needed
      },
    ],
  },
};

export default nextConfig;

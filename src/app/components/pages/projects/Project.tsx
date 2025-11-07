"use client";

import { Github } from "lucide-react";
import React from "react";

type ProjectItem = {
  id: string;
  category: string;
  title: string;
  sub_title: string;
  thumbail_image: string;
  live_link?: string;
  github_Link?: Array<{ title: string; url: string }>;
  technology_used?: string[];
};

type ProjectProps = {
  item: ProjectItem;
  index?: number;
};

const Project: React.FC<ProjectProps> = ({ item, index = 0 }) => {
  if (!item) return null;

  const isEven = index % 2 === 0;

  return (
    <div
      className="w-full rounded-xl p-6 shadow-lg overflow-hidden transform-gpu transition-all hover:-translate-y-1 hover:scale-[1.01]"
      style={{
        border: "1px solid rgba(255,165,0,0.06)",
        background: "rgba(11,11,11,0.5)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center`}>
        {/* left: image for odd/even swap to match the reference layout */}
        {isEven ? (
          <div className="order-1 md:order-1">
            <div className="rounded-lg overflow-hidden bg-black/30 p-3" style={{ backdropFilter: "blur(4px)" }}>
              <div className="grid grid-cols-2 gap-2">
                <img
                  src={item.thumbail_image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="flex flex-col gap-2">
                  <img
                    src={item.thumbail_image}
                    alt={item.title}
                    className="w-full h-20 object-cover rounded-md"
                  />
                  <img
                    src={item.thumbail_image}
                    alt={item.title}
                    className="w-full h-20 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* text */}
        <div className="order-2 md:order-2">
          <span className="inline-block bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded-full">
            {item.category}
          </span>
          <h3 className="text-2xl font-extrabold mt-3 text-white">{item.title}</h3>
          <p className="text-gray-300 mt-3">{item.sub_title}</p>

          <ul className="flex flex-wrap gap-2 mt-4">
            {item.technology_used?.map((t: string, i: number) => (
              <li
                key={i}
                className="text-sm px-3 py-1 bg-gray-900 text-gray-300 rounded-full"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex gap-4">
            <a
              href={item.live_link}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#fff1e6] text-[#ff6a00] px-4 py-2 rounded-md font-medium"
              rel="noreferrer"
            >
              View Details
            </a>

            <a
              href={item.github_Link?.[0]?.url}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#ff6a00] text-white px-4 py-2 rounded-md font-medium"
              rel="noreferrer"
            >
              <Github />
              View Design
            </a>
          </div>
        </div>

        {/* right: image for odd/even swap */}
        {!isEven ? (
          <div className="order-3 md:order-3">
            <div className="rounded-lg overflow-hidden bg-black p-3">
              <div className="grid grid-cols-2 gap-2">
                <img
                  src={item.thumbail_image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="flex flex-col gap-2">
                  <img
                    src={item.thumbail_image}
                    alt={item.title}
                    className="w-full h-20 object-cover rounded-md"
                  />
                  <img
                    src={item.thumbail_image}
                    alt={item.title}
                    className="w-full h-20 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Project;

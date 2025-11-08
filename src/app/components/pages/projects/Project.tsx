"use client";

import { Github } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProjectItem } from "@/app/data/projects";

type ProjectProps = {
  item: ProjectItem;
};

const Project: React.FC<ProjectProps> = ({ item }) => {
  if (!item) return null;

  // modern card style
  return (
    <article
      className="w-full rounded-xl overflow-hidden transform-gpu transition-shadow hover:shadow-2xl bg-linear-to-b from-black/30 to-black/10 border border-[#ffffff08]"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <Link href={`/projects/${item.id}`} className="block">
        <div className="relative h-44 sm:h-56 w-full">
          <Image src={item.thumbail_image} alt={item.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>

        <div className="p-4">
          <span className="inline-block bg-gray-800 text-sm text-gray-300 px-3 py-1 rounded-full">
            {item.category}
          </span>
          <h3 className="text-lg sm:text-xl font-semibold mt-3 text-white">
            {item.title}
          </h3>
          <p className="text-sm text-gray-300 mt-2 line-clamp-3">{item.sub_title}</p>

          <ul className="flex flex-wrap gap-2 mt-4">
            {item.technology_used?.map((t: string, i: number) => (
              <li key={i} className="text-xs px-2 py-1 bg-gray-900 text-gray-300 rounded-full">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-[#ffb86b]">View details</span>
            <a
              href={item.github_Link?.[0]?.url}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#ff6a00] text-white px-3 py-1 rounded-md text-sm"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Project;

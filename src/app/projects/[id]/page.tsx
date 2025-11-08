"use client";

import projectsData from "@/app/data/projects";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Project not found</h2>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-6 md:p-12">
      <div
        className="max-w-4xl mx-auto bg-black/40 rounded-xl p-6"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <h1 className="text-3xl font-bold text-white">{project.title}</h1>
        <p className="text-gray-300 mt-4">{project.sub_title}</p>

        <div className="mt-6 w-full h-64 md:h-96 relative rounded-md overflow-hidden">
          <Image
            src={project.thumbail_image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-white">Technologies</h3>
          <ul className="flex flex-wrap gap-2 mt-3">
            {project.technology_used?.map((t, i) => (
              <li
                key={i}
                className="text-sm px-3 py-1 bg-gray-900 text-gray-200 rounded-full"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex gap-3">
          {project.live_link ? (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.live_link}
              className="px-4 py-2 bg-[#ffb86b] rounded-md"
            >
              View Live
            </a>
          ) : null}
          {project.github_Link?.[0]?.url ? (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.github_Link[0].url}
              className="px-4 py-2 bg-[#ff6a00] text-white rounded-md"
            >
              View Repo
            </a>
          ) : null}
        </div>
      </div>
    </main>
  );
}

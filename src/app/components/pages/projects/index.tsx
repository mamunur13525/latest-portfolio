"use client";

import { useState } from "react";
import TitleEffect from "../../TitleEffect";
import Project from "./Project";
import NoData from "./NoData";

const menuBar = [
  {
    id: 0,
    name: "All",
    category: "all",
  },
  {
    id: 1,
    name: "e-commerce",
    category: "e-commerce",
  },
  {
    id: 2,
    name: "admin dashboard",
    category: "admin_dashboard",
  },

  {
    id: 3,
    name: "live chat",
    category: "live_chat",
  },
  {
    id: 4,
    name: "blogs",
    category: "blogs",
  },
  {
    id: 5,
    name: "movies",
    category: "movies",
  },
  {
    id: 6,
    name: "agency",
    category: "agency",
  },
  {
    id: 7,
    name: "portfolio",
    category: "portfolio",
  },
];

const Projects = () => {
  // activeMenu defaults to 'all' so all projects show initially
  const [activeMenu, setActiveMenu] = useState<string>("all");

  // Demo project data to show in the UI (images use external URLs for convenience)
  const projectsData = [
    {
      id: "p1",
      category: "portfolio",
      title: "Fontora Icons - 5000+ Open Source Icons",
      sub_title:
        "FontoraIcons is a large library of over 5000 open-source vector icons designed for designers and developers.",
      thumbail_image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
      live_link: "https://example.com/fontora",
      github_Link: [
        { title: "GitHub", url: "https://github.com/example/fontora" },
      ],
      technology_used: ["React", "Next.js", "TailwindCSS"],
    },
    {
      id: "p2",
      category: "agency",
      title: "Splito - Share Expenses, Made Simple",
      sub_title:
        "Keep track of group expenses without the hassle. Splito helps you record costs and divide them fairly among friends.",
      thumbail_image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80&auto=format&fit=crop",
      live_link: "https://example.com/splito",
      github_Link: [
        { title: "Design Files", url: "https://dribbble.com/example/splito" },
      ],
      technology_used: ["Figma", "Branding"],
    },
    {
      id: "p3",
      category: "e-commerce",
      title: "Shoply - Modern E-commerce",
      sub_title:
        "A modern e-commerce frontend with a polished UI and fast performance.",
      thumbail_image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop",
      live_link: "https://example.com/shoply",
      github_Link: [
        { title: "GitHub", url: "https://github.com/example/shoply" },
      ],
      technology_used: ["Next.js", "Stripe", "TailwindCSS"],
    },
  ];

  // returns filtered data based on activeMenu
  const filterData = () => {
    if (!activeMenu || activeMenu === "all") return projectsData;
    return projectsData.filter((p) => p.category === activeMenu);
  };

  return (
    <div className="py-10">
      <TitleEffect h1={""} title="Projects" />
      <div className="row m-auto mt-5 font-popping">
        <ul className="flex flex-wrap gap-4 mb-6">
          {menuBar.map((menu) => (
            <li
              onClick={() => setActiveMenu(menu.category)}
              key={menu.id}
              className={` py-1.5 px-4  border border-[#ffa500] cursor-pointer duration-300 transition-all rounded-full text-sm ${
                activeMenu === menu.category
                  ? "bg-[#ffa500] text-black"
                  : "text-white"
              }`}
            >
              {menu.name}
            </li>
          ))}
        </ul>

        <div className="mt-3 space-y-8">
          {filterData().length ? (
            filterData().map((item, ind) => (
              <Project key={item.id} item={item} index={ind} />
            ))
          ) : (
            <NoData onReset={() => setActiveMenu("all")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

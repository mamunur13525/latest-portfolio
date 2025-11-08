"use client";

import { useState } from "react";
import TitleEffect from "../../TitleEffect";
import Project from "./Project";
import NoData from "./NoData";
import projectsData from "@/app/data/projects";

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

  // use centralized data file
  // projectsData imported from /src/app/data/projects

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
              className={` py-1.5 px-4  border border-[#01fce8] cursor-pointer duration-300 transition-all rounded-full text-sm ${
                activeMenu === menu.category
                  ? "bg-[#01fce8] text-black"
                  : "text-white"
              }`}
            >
              {menu.name}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          {filterData().length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterData().map((item) => (
                <Project key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <NoData onReset={() => setActiveMenu("all")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

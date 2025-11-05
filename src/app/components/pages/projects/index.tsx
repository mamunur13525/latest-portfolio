"use client";

import { useState } from "react";
import TitleEffect from "../../TitleEffect";

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
  const [activeMenu, setActiveMenu] = useState("");

  const filterData = ()=> {

  }
  return (
    <div className="py-10">
      <TitleEffect h1={""} title="Projects" />
      <div className="row m-auto mt-5 font-popping">
        <ul className="flex flex-wrap gap-4">
          {menuBar.map((menu) => (
            <li
              onClick={() => setActiveMenu(menu.category)}
              key={menu.id}
              className={` py-1.5 px-4  border border-[#ffa500] cursor-pointer duration-300 transition-all ${
                activeMenu === menu.category
                  ? "bg-[#ffa500] text-black"
                  : "text-white"
              }`}
            >
              {menu.name}
            </li>
          ))}
        </ul>
        <div className="row m-auto mt-3 projectAll_div">
          {filterData()?.length ? (
            filterData.map((item, ind) => (
              <Project setVideoOn={setVideoOn} key={ind} item={item} />
            ))
          ) : (
            <p className="text-white">No Data Foud!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

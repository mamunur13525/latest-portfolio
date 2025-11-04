"use client";

import { ExternalLinkIcon, Github } from "lucide-react";
import React, { useRef, useState } from "react";

const Project = ({ setVideoOn, item }: any) => {
  const [projectHeight, setProjectHeight] = useState(20);
  const projectInfoRef = useRef(null);
  const [hover, setHover] = useState(false);

  const projectMouseEnter = () => {
    setProjectHeight(projectInfoRef && projectInfoRef?.current?.clientHeight + 20);
    setHover(true);
  };
  const projectMouseLeave = () => {
    setProjectHeight(0);
    setHover(false);
  };

  console.log({ item });
  if (item)
    return (
      <div
        onMouseLeave={projectMouseLeave}
        onMouseEnter={projectMouseEnter}
        style={hover ? { zIndex: 124 } : { zIndex: 0 }}
        className="col-md-4 animate__animated animate__fadeInUp"
      >
        <div className="single_project">
          <p className="category_name">{item.category}</p>
          <h3 className="font-weight-bold">{item.title}</h3>
          <div
            style={{
              height: `${projectHeight}px`,
              display: projectHeight ? "block" : "hidden",
            }}
            className="project_info"
          >
            <div ref={projectInfoRef}>
              <p className="mb-2">{item.sub_title}</p>
              {/* <ul className="d-flex ">
                {
                  item.github_Link.map((link, ind) => (
                    <li key={ind} className="link_icon">
                      <a title={link.title} href={link.url} target="blank">
                        <FaGithub />
                      </a>
                    </li>
                  ))
                }
                <li className="link_icon">
                  <a
                    title="Live Preview"
                    href={item.live_link}
                    target="blank"
                  >
                    <MdExitToApp />
                  </a>
                </li>
              </ul> */}
              <ul className="ul_technology_used">
                {item.technology_used.map((tech, ind) => (
                  <li key={ind} className="tech_name">
                    {tech},
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            {item.thumbail_image && (
              <div className="image_trailer_div">
                <img
                  className="pointer"
                  src={item.thumbail_image}
                  alt="thumbnail"
                />
                <ul className="project_view">
                  {item.github_Link.map((link, ind) => (
                    <li key={ind} className="link_icon">
                      <a title={link.title} href={link.url} target="blank">
                        <Github className="icon_project" />
                        <span>{link?.title}</span>
                      </a>
                    </li>
                  ))}
                  <li className="link_icon">
                    <a
                      title="Live Preview"
                      href={item?.live_link}
                      target="blank"
                    >
                      <span>
                        <ExternalLinkIcon
                          style={{ fontSize: "1.5rem", marginRight: ".4rem" }}
                        />
                        <span>Live</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Project;

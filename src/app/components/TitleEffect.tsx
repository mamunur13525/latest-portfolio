"use client";
import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  title: string;
  h1?: string | ReactElement;
}
// Define the correct event type for the handler
type MouseEnterHandler = React.MouseEvent<HTMLSpanElement>;

const TitleEffect = ({ className = "", title = "", h1 = "" }: Props) => {
  //Mouse Hover Effect
  const handleMouseHoverEffect = (event: MouseEnterHandler) => {
    const target = event.target as HTMLSpanElement;
    target.className += ` rabber_band`;
    setTimeout(() => {
      target.className = `blast`;
    }, 1000);
  };

  return (
    <h1 className={twMerge(`main_heading_title flex gap-2 items-end`, className)}>
      {title.split("").map((item, index) => (
        <span
          key={item + index}
          onMouseEnter={(e) => handleMouseHoverEffect(e)}
          className={"blast"}
        >
          {item}
        </span>
      ))}
      <span className="heading_helper_text font-labelle"> {h1} </span>
    </h1>
  );
};

export default TitleEffect;

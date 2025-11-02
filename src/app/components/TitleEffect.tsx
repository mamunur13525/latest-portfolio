"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  title: string;
  h1?: string;
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
    <h1 className={twMerge(`main_heading_title flex `, className)}>
      {title.split("").map((item, index) => {
        console.log({ item });
        return (
          <span
            key={item + index}
            onMouseEnter={(e) => handleMouseHoverEffect(e)}
            className={"blast"}
          >
            {item}
          </span>
        );
      })}
      &nbsp;
      {h1}
    </h1>
  );
};

export default TitleEffect;

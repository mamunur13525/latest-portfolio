import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { LoaderCircle } from "lucide-react";

interface Props {
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}
const Button = ({
  type = "button",
  loading,
  onClick,
  className,
  children,
}: Props) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={twMerge(
        `border border-[#c9ab04] text-[#c9ab04] py-1.5 px-7 uppercase hover:rounded-3xl ease-in-out rounded-none transition-all duration-500 hover:bg-[#c9ab04] hover:text-black cursor-pointer flex items-center group gap-2 hover:gap-6`,
        className
      )}
      type={type || "button"}
    >
      {loading && <LoaderCircle className="animate-spin " />}
      {children}
    </button>
  );
};

export default Button;

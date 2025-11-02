import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { LoaderCircle } from "lucide-react";

interface Props {
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}
const Button = ({ loading, onClick, className, children }: Props) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={twMerge(`btn_ flex items-center gap-2`, className)}
      type="submit"
    >
      {loading && <LoaderCircle className='animate-spin ' />}
      {children}
    </button>
  );
};

export default Button;

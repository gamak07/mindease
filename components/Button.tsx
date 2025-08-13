import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  type,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

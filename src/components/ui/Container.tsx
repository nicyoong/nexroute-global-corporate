import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

export default function Container({
  children,
  className = "",
  id,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}

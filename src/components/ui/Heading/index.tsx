import { twMerge } from "tailwind-merge";

interface HeadingProps {
  level: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ level, children, className }: HeadingProps) {
  const Tag = level;
  const base = "font-bold text-gray-100 capitalize";

  const sizes = {
    h1: "text-3xl md:text-4xl",
    h2: "text-2xl md:text-3xl",
    h3: "text-xl",
  };

  const classes = twMerge(base, sizes[level], className);

  return <Tag className={classes}>{children}</Tag>;
}

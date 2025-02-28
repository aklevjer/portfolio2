import { twMerge } from "tailwind-merge";

interface HeadingProps {
  level: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
}

/**
 * Heading component that renders a heading element with the specified level and optional styling.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.level - The heading level (h1, h2, h3).
 * @param props.children - The content (text or elements) to display inside the heading.
 * @param [props.className] - Additional CSS classes for the heading (optional).
 *
 * @returns JSX element representing the heading.
 */
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

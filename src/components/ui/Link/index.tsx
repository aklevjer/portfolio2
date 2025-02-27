import { twMerge } from "tailwind-merge";

interface LinkProps {
  path: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  asExternal?: boolean;
  className?: string;
}

export default function Link({ path, children, onClick, asExternal, className }: LinkProps) {
  return (
    <a
      href={path}
      target={asExternal ? "_blank" : "_self"}
      onClick={onClick}
      className={twMerge("decoration-indigo-500 underline-offset-4 hover:underline", className)}
    >
      {children}
    </a>
  );
}

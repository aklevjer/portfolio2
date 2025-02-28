import { twMerge } from "tailwind-merge";

interface LinkProps {
  path: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  asExternal?: boolean;
  className?: string;
}

/**
 * Link component that renders a customizable anchor element for navigation.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.path - The URL or path the link navigates to when clicked.
 * @param props.children - The content (text or elements) to display inside the link.
 * @param [props.onClick] - Click handler function triggered when the link is clicked (optional).
 * @param [props.asExternal] - Whether the link should open in a new tab (optional).
 * @param [props.className] - Additional CSS classes for the link (optional).
 *
 * @returns JSX element representing the link.
 */
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

import { useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { NAV_LINKS } from "@/constants/links";
import Link from "@/components/ui/Link";

interface NavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Nav component that displays the navigational links.
 * Handles closing the menu when clicking outside.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.isMenuOpen - Whether the mobile menu is currently open.
 * @param props.setIsMenuOpen - Function to toggle menu visibility.
 *
 * @returns JSX element representing the nav.
 */
export default function Nav({ isMenuOpen, setIsMenuOpen }: NavProps) {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <nav
      ref={navRef}
      className={twMerge(
        "shadow-3xl absolute top-16 left-0 w-full bg-gray-800 md:static md:w-auto md:pb-0 md:shadow-none",
        isMenuOpen && "pb-2",
      )}
    >
      <ul className="font-normal md:flex md:gap-6">
        {NAV_LINKS.map(({ path, label }) => (
          <li
            key={label}
            className={twMerge(
              "h-0 overflow-hidden text-center leading-10 transition-[height] duration-200 md:h-auto md:overflow-visible",
              isMenuOpen && "h-10",
            )}
          >
            <Link path={path} onClick={() => setIsMenuOpen(false)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

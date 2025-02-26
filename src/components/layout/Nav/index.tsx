import { useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { NAV_LINKS } from "@/constants/links";

interface NavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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
              "h-0 overflow-hidden text-center leading-10 transition-[height] duration-200 md:h-auto",
              isMenuOpen && "h-10",
            )}
          >
            <a
              href={path}
              onClick={() => setIsMenuOpen(false)}
              className="decoration-indigo-500 underline-offset-4 hover:underline"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

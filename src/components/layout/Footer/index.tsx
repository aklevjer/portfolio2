import { BiLogoGithub } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-gray-600 py-4 md:flex-row-reverse">
      <a
        href="https://github.com/aklevjer"
        target="_blank"
        aria-label="Github"
        className="transition-colors hover:text-indigo-500"
      >
        <BiLogoGithub size={28} />
      </a>

      <p className="text-m space-x-1 text-center">
        <span>&copy; {new Date().getFullYear()}</span>
        <span>Aleksander Klevjer</span>
      </p>
    </footer>
  );
}

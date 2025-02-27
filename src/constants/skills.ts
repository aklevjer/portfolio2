import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoFigma,
  BiLogoGithub,
} from "react-icons/bi";
import { TbBrandVite, TbBrandCypress } from "react-icons/tb";
import { SiVitest } from "react-icons/si";

export const SKILLS = [
  {
    path: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    label: "HTML",
    icon: BiLogoHtml5,
  },
  {
    path: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    label: "CSS",
    icon: BiLogoCss3,
  },
  {
    path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    label: "JavaScript",
    icon: BiLogoJavascript,
  },
  {
    path: "https://www.typescriptlang.org",
    label: "TypeScript",
    icon: BiLogoTypescript,
  },
  {
    path: "https://react.dev",
    label: "React",
    icon: BiLogoReact,
  },
  {
    path: "https://vite.dev",
    label: "Vite",
    icon: TbBrandVite,
  },
  {
    path: "https://tailwindcss.com",
    label: "Tailwind",
    icon: BiLogoTailwindCss,
  },
  {
    path: "https://getbootstrap.com",
    label: "Bootstrap",
    icon: BiLogoBootstrap,
  },

  {
    path: "https://www.figma.com",
    label: "Figma",
    icon: BiLogoFigma,
  },
  {
    path: "https://www.cypress.io",
    label: "Cypress",
    icon: TbBrandCypress,
  },

  {
    path: "https://vitest.dev",
    label: "Vitest",
    icon: SiVitest,
  },
  {
    path: "https://github.com",
    label: "GitHub",
    icon: BiLogoGithub,
  },
];

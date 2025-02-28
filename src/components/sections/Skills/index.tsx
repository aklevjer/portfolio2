import { SKILLS } from "@/constants/skills";
import Heading from "@/components/ui/Heading";

/**
 * Skills component that displays a list of skills as clickable icons.
 *
 * @component
 * @returns JSX element representing the skills section.
 */
export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-8 space-y-4">
      <Heading level="h2">Skills</Heading>

      <ul className="grid grid-cols-(--grid-cols-skills) gap-4">
        {SKILLS.map(({ path, label, icon: Icon }) => (
          <li key={label}>
            <a
              href={path}
              target="_blank"
              className="grid place-items-center gap-2 rounded-md border border-gray-600 bg-gray-700 p-2 transition-colors hover:cursor-pointer hover:border-indigo-500"
            >
              <Icon size={32} />
              <span className="text-sm font-medium">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

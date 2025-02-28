import { SOCIAL_LINKS } from "@/constants/links";
import Heading from "@/components/ui/Heading";

/**
 * Contact component that displays social media links as clickable icons.
 *
 * @component
 * @returns JSX element representing the contact section.
 */
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 space-y-4">
      <Heading level="h2">Contact me</Heading>

      <div className="flex flex-wrap items-center justify-between gap-6">
        <p className="md:max-w-sm">
          Have a question or want to discuss a project? Feel free to connect with me on social
          media!
        </p>

        <ul className="flex flex-wrap gap-4">
          {SOCIAL_LINKS.map(({ path, label, icon: Icon }) => (
            <li key={label}>
              <a
                href={path}
                target="_blank"
                aria-label={label}
                className="block rounded-md border border-gray-600 bg-gray-700 p-2 transition-colors hover:cursor-pointer hover:border-indigo-500"
              >
                <Icon size={32} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

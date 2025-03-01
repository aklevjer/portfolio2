import Heading from "@/components/ui/Heading";
import Link from "@/components/ui/Link";

/**
 * About component that displays an informational section about the developer.
 *
 * @component
 * @returns JSX element representing the about section.
 */
export default function About() {
  return (
    <section id="about" className="scroll-mt-8 space-y-6">
      <Heading level="h2">About me</Heading>

      <div className="space-y-4 hyphens-auto">
        <p>
          I'm Aleksander, a 34-year-old from Porsgrunn, Norway. After over a decade as a chef, I
          decided to pursue my passion for IT and enrolled in{" "}
          <Link asExternal path="https://www.noroff.no" className="font-medium">
            Noroff’s
          </Link>{" "}
          front-end development program in 2023.
        </p>

        <p>
          Since then, I’ve developed strong expertise in modern web technologies like{" "}
          <Link asExternal path="https://react.dev" className="font-medium">
            React
          </Link>
          ,{" "}
          <Link asExternal path="https://www.typescriptlang.org" className="font-medium">
            TypeScript
          </Link>
          , and{" "}
          <Link asExternal path="https://tailwindcss.com" className="font-medium">
            Tailwind CSS
          </Link>
          , along with a solid understanding of front-end best practices, including design, testing,
          and project management.
        </p>

        <p>
          As I continue my journey, I'm excited to keep learning, growing, and taking on new
          challenges that help me stay ahead in an ever-evolving industry.
        </p>
      </div>
    </section>
  );
}

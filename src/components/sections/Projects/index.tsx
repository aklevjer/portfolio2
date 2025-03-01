import { PROJECTS } from "@/constants/projects";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

/**
 * Projects component that displays a list of projects using the `Card` component for each project.
 *
 * @component
 * @returns JSX element representing the projects section.
 */
export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-8 space-y-6">
      <Heading level="h2">Projects</Heading>

      <ul className="space-y-6">
        {PROJECTS.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </ul>
    </section>
  );
}

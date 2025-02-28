import { BiWorld, BiLogoGithub } from "react-icons/bi";
import { Project } from "@/types";
import Heading from "@/components/ui/Heading";

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  const { title, image, description, website, github } = project;

  return (
    <li className="flex flex-wrap overflow-hidden rounded-md border border-gray-600 bg-gray-700 shadow-2xl">
      <div className="flex-1 basis-64">
        <img
          src={image}
          alt={`Screen shot of ${title} website`}
          className="size-full object-cover"
        />
      </div>

      <div className="text-m flex-1 basis-96 p-4">
        <Heading level="h3" className="mb-2">
          {title}
        </Heading>

        <p className="mb-4">{description}</p>

        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          <li>
            <a
              href={website}
              target="_blank"
              className="flex items-center gap-1 border-b border-transparent pb-px leading-none font-medium capitalize hover:border-indigo-500"
            >
              <BiWorld size={20} />
              Live demo
            </a>
          </li>

          <li>
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-1 border-b border-transparent pb-px leading-none font-medium capitalize hover:border-indigo-500"
            >
              <BiLogoGithub size={20} />
              Repository
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
}

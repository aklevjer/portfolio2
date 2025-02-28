interface ButtonProps {
  path: string;
  children: React.ReactNode;
}

/**
 * Button component that renders a link button for navigation.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.path - The path to navigate to when clicked.
 * @param props.children - The content (text or elements) to display inside the button.
 *
 * @returns JSX element representing the button.
 */
export default function Button({ path, children }: ButtonProps) {
  return (
    <a
      href={path}
      className="inline-block rounded-md border border-indigo-500 px-4 py-2 font-medium text-gray-100 capitalize transition-colors hover:border-gray-100"
    >
      {children}
    </a>
  );
}

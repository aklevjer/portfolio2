interface ButtonProps {
  path: string;
  children: React.ReactNode;
}

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

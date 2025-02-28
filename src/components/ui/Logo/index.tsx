/**
 * Logo component that displays a clickable logo with the text "AK" and a highlighted dot.
 *
 * @component
 * @returns JSX element representing the logo.
 */
export default function Logo() {
  return (
    <a href="#" className="text-3xl font-bold text-gray-100">
      AK<span className="text-indigo-500">.</span>
    </a>
  );
}

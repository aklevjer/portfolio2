import { BiMenu, BiX } from "react-icons/bi";

interface MenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * MenuButton component that toggles the mobile menu visibility.
 *
 * @component
 * @param props - The properties passed to the component.
 * @param props.isMenuOpen - Whether the mobile menu is currently open.
 * @param props.setIsMenuOpen - Function to toggle menu visibility.
 *
 * @returns JSX element representing the menu button.
 */
export default function MenuButton({ isMenuOpen, setIsMenuOpen }: MenuButtonProps) {
  const handleToggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <button
      aria-label="Menu"
      aria-expanded={isMenuOpen}
      onClick={handleToggleMenu}
      className="grid size-9 cursor-pointer place-items-center rounded-md border border-gray-600 md:hidden"
    >
      {isMenuOpen ? <BiX size={20} /> : <BiMenu size={20} />}
    </button>
  );
}

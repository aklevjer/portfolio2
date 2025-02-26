import { BiMenu, BiX } from "react-icons/bi";

interface MenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

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

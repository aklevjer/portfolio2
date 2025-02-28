import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Nav from "@/components/layout/Nav";
import MenuButton from "@/components/layout/MenuButton";

/**
 * Header component that displays the logo, navigation and mobile menu button.
 * Manages the state for the mobile menu and passes it to the child components.
 *
 * @component
 * @returns JSX element representing the header.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex h-20 items-center justify-between">
      <Logo />
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}

import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Nav from "@/components/layout/Nav";
import MenuButton from "@/components/layout/MenuButton";

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

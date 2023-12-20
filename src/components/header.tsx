import { MenuIcon } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-14 border-b flex">
      <div className="container flex justify-between px-4 items-center">
        <p className="font-semibold">토스</p>
        <MenuIcon />
      </div>
    </header>
  );
};

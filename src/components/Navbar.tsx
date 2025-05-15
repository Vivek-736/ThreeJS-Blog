import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className="top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Vivek
          </a>
          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {open ? (
              <X className="text-white w-6 h-6 cursor-pointer" />
            ) : (
              <Menu className="text-white w-6 h-6 cursor-pointer" />
            )}
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`nav-sidebar ${open ? "max-h-screen" : "max-h-0"}`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

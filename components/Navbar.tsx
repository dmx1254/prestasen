import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <section className="flex items-center h-[70px] justify-center w-full border-b border-gray-300 bg-inherit z-[100]">
      <nav className="flex items-center justify-between w-full h-[60px] px-4">
        <Link
          href="/"
          className="flex text-xl font-ibm-plex-serif text-stroke text-black"
        >
          PrestaSen
        </Link>

        <div className="flex items-center gap-4 font-ibm-plex-serif">
          <Link
            href="#"
            className="text-sm flex items-center justify-center  bg-orange-600 transition duration-300 ease-in-out hover:opacity-90 text-white rounded p-2"
          >
            Devenir partenaire
          </Link>
          <Link
            href="#"
            className="text-sm text-[#71717a] relative hover:text-hover-effect"
          >
            explorer
          </Link>
          <Link
            href="#"
            className="text-sm text-[#71717a] relative hover:text-hover-effect"
          >
            Inscription
          </Link>
          <Link
            href="#"
            className="text-sm text-[#71717a] relative hover:text-hover-effect"
          >
            Connexion
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

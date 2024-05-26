import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <section className="flex items-center justify-center w-full border-b border-gray-200">
      <nav className="flex items-center justify-between w-full h-[60px] px-4">
        <h1 className="flex text-xl font-ibm-plex-serif text-stroke">
          PrestaSen
        </h1>

        <div className="flex items-center gap-4 font-ibm-plex-serif">
          <Link
            href="#"
            className="text-sm flex items-center justify-center  bg-orange-600 text-white rounded p-2"
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

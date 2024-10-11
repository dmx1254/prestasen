"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCirclePlus } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  // console.log(pathname)
  const [hToScroll, setHToScroll] = useState<number>(0);

  const handleHeightScroll = () => {
    const toHeightScroll = window.scrollY;
    setHToScroll(toHeightScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHeightScroll);

    return () => {
      window.removeEventListener("scroll", handleHeightScroll);
    };
  }, []);

  // console.log(hToScroll);

  return (
    <nav
      className="w-full flex items-center justify-between px-4 py-2 fixed z-[999] top-0 left-0 right-0"
      style={{
        background:
          hToScroll >= 210
            ? "white"
            : pathname === "/"
            ? "transparent"
            : "white",
        borderBottom:
          hToScroll >= 210
            ? "1px solid #d1d5db"
            : pathname === "/"
            ? "1px solid transparent"
            : "1px solid #d1d5db",
      }}
    >
      <Link
        href="/"
        className="flex text-xl text-stroke"
        style={{
          color:
            hToScroll >= 210
              ? "#ea580c"
              : pathname === "/"
              ? "white"
              : "#ea580c",
        }}
      >
        PrestaSen
      </Link>
      <button
        className="items-center gap-2 bg-orange-600 px-4 py-3 font-bold rounded-full text-white"
        style={{
          display:
            hToScroll >= 210 ? "flex" : pathname === "/" ? "none" : "flex",
        }}
      >
        <FaCirclePlus />
        Demander un service
      </button>
      <div
        className="flex items-center gap-4 text-white"
        style={{
          color:
            hToScroll >= 210
              ? "#111827"
              : pathname === "/"
              ? "white"
              : "#111827",
        }}
      >
        <Link
          href="#"
          className="text-sm relative font-semibold text-center p-2 transition duration-300 ease-in-out rounded-full hover:hover:bg-black/5"
        >
          Devenir partenaire
        </Link>
        {/* <Link
          href="#"
          className="text-sm relative"
        >
          explorer
        </Link> */}
        <Link
          href="#"
          className="text-sm relative font-semibold text-center p-2 transition duration-300 ease-in-out rounded-full hover:hover:bg-black/5"
        >
          Inscription
        </Link>
        <Link
          href="#"
          className="text-sm relative font-semibold text-center p-2 transition duration-300 ease-in-out rounded-full hover:bg-black/5"
        >
          Connexion
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

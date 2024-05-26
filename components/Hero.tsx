import React from "react";
import { TextFlip } from "./TextFlip";

import { MapPin } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container flex items-center justify-center w-full h-[600px]">
      <div className="flex flex-col gap-4 items-start w-1/2">
        <div>
          <TextFlip />
        </div>
        <div className="flex items-center gap-4 ml-4 font-ibm-plex-serif">
          <span className="text-orange-600 font-semibold text-base">
            Embaucher un pro
          </span>
          <span className="text-[#71717a]  font-semibold text-base">
            Trouver des clients
          </span>
        </div>

        <div
          className="flex items-center gap-0 ml-4 border border-gray-300 rounded-tr rounded-br"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <div className="w-full flex-1">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="What's on your to-do list?"
              className="text-sm p-2 w-full outline-none font-ibm-plex-serif"
            />
          </div>
          <span className="mx-4 h-[30px] w-[1px] bg-gray-300"></span>
          <div className="relative">
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              placeholder="Code postal"
              className="p-2 outline-none text-sm font-ibm-plex-serif"
            />
            <MapPin
              size={15}
              className="absolute top-[32%] left-[-7%]"
              color="#d1d5db"
            />
          </div>
          <button className="flex items-center justify-center outline-none bg-orange-600 rounded-tr rounded-br text-base text-white p-3 font-ibm-plex-serif">
            Search
          </button>
        </div>
        <div className="flex items-center ml-4 text-sm font-ibm-plex-serif text-[#71717a]">
          Vous essayer de rechercher un &nbsp;
          <Link href="#" className="text-orange-600 font-semibold">
            Plombier
          </Link>,
          &nbsp;
          <Link href="#" className="text-orange-600 font-semibold">
            Decorateur
          </Link>,
          &nbsp;
          <Link href="#" className="text-orange-600 font-semibold">
            Électrien
          </Link>,
          &nbsp;
          <Link href="#" className="text-orange-600 font-semibold">
            Peintre
          </Link>.
        </div>
      </div>
      <div className="w-1/2">Section 2</div>
    </section>
  );
};

export default Hero;

import React from "react";

import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container relative hero2 flex items-center justify-center w-full h-[400px]">
      <div className="relative flex flex-col gap-4 items-center justify-center mx-auto hero">
        <div className="w-full flex flex-col items-center gap-4 max-w-[750px]">
          <p className="text-4xl/10 font-bold w-full text-center">
            Trouvez un Service à{" "}
            <span className="text-orange-600">Domicile/Réparation</span> Près de
            Chez Vous
          </p>
          <p className="text-[#71717a]">
            Découvrez les meilleurs services et réparations à domicile près de
            chez vous.
          </p>
        </div>
        <div className="flex items-center gap-4 ml-4 font-ibm-plex-serif">
          <span className="text-orange-600 font-semibold text-sm">
            Embaucher un pro
          </span>
          <span className="text-[#71717a]  font-semibold text-sm">
            Trouver des clients
          </span>
        </div>

        <div
          className="flex items-center gap-0 ml-4 border border-gray-300 rounded-tr rounded-br"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <div className="w-full min-w-60 flex-1">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="De quel service avez-vous besoin?"
              className="text-sm bg-transparent p-1.5 w-full outline-none font-ibm-plex-serif"
            />
          </div>
          <span className="mx-4 h-[30px] w-[1px] bg-gray-300"></span>
          <div className="relative">
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              placeholder="Code postal"
              className="p-1.5 outline-none bg-transparent text-sm font-ibm-plex-serif w-24"
            />
            <MapPin
              size={15}
              className="absolute top-[32%] left-[-10%]"
              color="#d1d5db"
            />
          </div>
          <button className="flex items-center justify-center outline-none bg-orange-600 rounded-tr rounded-br text-base text-white p-2.5 font-ibm-plex-serif">
            Recherche
          </button>
        </div>
        <div className="flex items-center ml-4 text-xs font-ibm-plex-serif text-[#71717a]">
          Vous essayer de rechercher un &nbsp;
          <Link href="#" className="text-orange-600 font-semibold">
            Plombier
          </Link>
          , &nbsp;
          <Link href="#" className="text-orange-600 font-semibold">
            Decorateur
          </Link>
          , &nbsp;
          <Link href="#" className="text-orange-600 font-semibold">
            Électrien
          </Link>
          , &nbsp;
          <Link href="#" className="text-orange-600 font-semibold">
            Peintre
          </Link>
          .
        </div>
      </div>
      {/* <div className="w-1/2 relative">
        
      </div> */}
      <Image
        src="images/linesvg.svg"
        alt="line svg"
        width={300}
        height={300}
        quality={100}
        className="absolute top-[60%] translate-y-[-50%] left-[10%]"
      />
    </section>
  );
};

export default Hero;

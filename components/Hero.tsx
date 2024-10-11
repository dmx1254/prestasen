import { FaSearch } from "react-icons/fa";
import { words } from "@/lib/data";
import TextWriter from "./ui/TextWriter";

const Hero = () => {
  return (
    <section className="flex items-center justify-center w-full h-[400px] bg-orange-600">
      <div className="flex flex-col items-center gap-8">
        <p className="text-5xl text-white font-bold capitalize text-center">
          Réservez le prestataire idéal
        </p>
        <div className="flex items-center relative bg-white w-full max-w-96 h-16 rounded-full">
          <span className="flex-1 mx-8 text-gray-500 text-sm">
            <TextWriter phrases={words} cursor="|" />
          </span>
          <span className="absolute flex items-center justify-center text-center p-3 rounded-full bg-orange-600 left-[84%] top-[50%] translate-y-[-50%]">
            <FaSearch className="text-white" size={24} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

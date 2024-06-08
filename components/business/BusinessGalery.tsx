"use client";
import { ChevronRight } from "lucide-react";

const BusinessGalery = () => {
  return (
    <div className="relative flex flex-col items-start gap-4">
      <h3 className="text-lg font-bold">Mes travaux</h3>
      <div className="scrollprofil transition-all ease-out duration-500 pb-2 w-full flex items-center gap-4 max-w-[800px] overflow-x-scroll">
        <img
          src="/services/cleaning.jpg"
          alt="jenny cleaning"
          className="w-60 h-48 object-cover object-center rounded-[8px]"
        />
        <img
          src="/services/cleaning.jpg"
          alt="jenny cleaning"
          className="w-60 h-48 object-cover object-center rounded-[8px]"
        />
        <img
          src="/services/cleaning.jpg"
          alt="jenny cleaning"
          className="w-60 h-48 object-cover object-center rounded-[8px]"
        />
      </div>
    </div>
  );
};

export default BusinessGalery;

"use client";
import { ChevronRight } from "lucide-react";

const BusinessGalery = () => {
  return (
    <div className="relative flex flex-col items-start">
      <div className="scrollprofil transition-all ease-out duration-500 pb-2 w-full flex items-center gap-4 overflow-x-auto">
        <img
          src="/services/cleaning.jpg"
          alt="jenny cleaning"
          className="w-48 h-44 object-cover object-center rounded-[8px]"
        />
        <img
          src="/services/cleaning.jpg"
          alt="jenny cleaning"
          className="w-48 h-44 object-cover object-center rounded-[8px]"
        />
        <img
          src="/services/cleaning.jpg"
          alt="jenny cleaning"
          className="w-48 h-44 object-cover object-center rounded-[8px]"
        />
      </div>
    </div>
  );
};

export default BusinessGalery;

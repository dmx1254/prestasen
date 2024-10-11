import React from "react";
import { dataService } from "@/lib/data";
import { ButtonService } from "./PopolarSvg";

const Categories = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-5xl mx-auto bg-white shadow-2xl z-50 p-2 rounded-[12px] translate-y-[-50%] overflow-x-auto">
      {dataService.map((service) => (
        <ButtonService
          key={service.id}
          icon={service.svgIcon}
          title={service.title}
          href="/appointment"
        />
      ))}
    </div>
  );
};

export default Categories;

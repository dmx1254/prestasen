"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { dataService } from "@/lib/data";
import { ButtonService } from "./PopolarSvg";

const Popular = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <div className="w-full flex flex-col items-start pt-16">
      <div className="w-full flex items-center justify-between">
        <div className="text-lg">
          <Popover onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild className="m-0 p-0">
              <Button className="text-lg text-gray-600">
                Trouver un professionnel prés de &nbsp;
                <span className="text-violet-600 font-bold uppercase">
                  chez vous
                </span>
                &nbsp;
                <ChevronDown
                  className={`text-violet-600 mt-[1px] transition ease-in-out duration-500 ${
                    isPopoverOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-80 z-[200] border-none bg-white rounded"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <div className="flex flex-col items-start gap-4">
                <h2>Mettez à jour votre emplacement</h2>
                <input
                  type="text"
                  placeholder="code postal"
                  className="w-full outline-none p-2 border border-gray-300 rounded-[10px]"
                />
                <button className="flex items-center justify-center p-2 rounded-[30px] bg-violet-600 text-white">
                  Confirmer
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <button className="flex items-center justify-center p-2 outline-none rounded-[30px] bg-violet-600 text-white text-sm">
          parcourir les services
        </button>
      </div>
      <div className="w-full my-8 grid gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dataService.map((service) => (
          <ButtonService
            key={service.id}
            title={service.title}
            icon={service.svgIcon}
            className="border border-gray-300 p-4 cursor-pointer fliphover"
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

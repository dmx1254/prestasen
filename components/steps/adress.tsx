"use client";
import React, { useState } from "react";
import { HiShieldCheck } from "react-icons/hi";
import { ChevronsUpDown, Search, MoveLeft } from "lucide-react";
import { Input } from "../ui/input";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const Adress = ({ category, title }: { category: string; title: string }) => {
  const [addManually, setAddManually] = useState<boolean>(true);
  const handleReturToSearch = () => {
    setAddManually(false);
  };
  return (
    <div className="flex flex-col items-center max-h-[600px] overflow-y-auto w-full max-w-2xl py-8">
      <div className="flex flex-col items-start mb-4">
        <p className="text-gray-800 font-semibold">{category}</p>
        <p className="text-3xl font-bold max-w-md">{title}</p>
      </div>
      <Dialog>
        <DialogTrigger className="w-full max-w-md">
          <div className="relative w-full max-w-md mb-4 mt-2">
            <Input
              type="text"
              placeholder=""
              className="w-full border-none rounded-[10px] bg-[#E9EAEC] p-4 pointer-events-none"
            />
            <ChevronsUpDown
              size={16}
              className="absolute top-[30%] left-[95%]"
            />
          </div>
        </DialogTrigger>
        <DialogContent
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            borderRadius: "10px",
          }}
          className="bg-white border-none"
        >
          <div className="flex flex-col items-start mt-5 gap-2">
            <div className="relative w-full max-w-md">
              {addManually ? (
                <div className="relative flex flex-col items-start">
                  <span
                    className="absolute p-3 cursor-pointer rounded-full left-[-1%] top-[-9%] opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:bg-[#EAE9EC] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    onClick={handleReturToSearch}
                  >
                    <MoveLeft size={20} />
                  </span>
                  <p className="text-3xl font-bold text-gray-900 mt-4 mb-2">
                    Ajouter une adresse manuellement
                  </p>
                  <div className="relative flex flex-col items-start gap-2 w-full max-w-md mb-4">
                    <label htmlFor="address">Adresse complète</label>
                    <Input
                      type="text"
                      id="address"
                      placeholder="Numero et nom de rue"
                      className="w-full border-none rounded-[10px] placeholder:text-gray-600 bg-[#E9EAEC] pt-4 pb-4 pr-4 pl-8"
                    />
                    <Search
                      size={16}
                      className="absolute top-[63%] left-[1.5%] text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full max-w-md mb-4">
                    <label htmlFor="postalcode">Code postal</label>
                    <Input
                      type="text"
                      id="postalcode"
                      placeholder="20250"
                      className="w-full border-none rounded-[10px] placeholder:text-gray-600 bg-[#E9EAEC] p-4"
                    />
                  </div>
                  <button className="border-none outline-none text-center w-full rounded-[10px] p-3 bg-orange-600 text-white transition duration-300 ease-in-out hover:opac">
                    Enregistrer
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-start gap-4">
                  <p className="text-3xl font-bold text-gray-900">
                    Saisissez une adresse
                  </p>
                  <div className="relative w-full max-w-md">
                    <Input
                      type="text"
                      placeholder="Rechercher une adresse"
                      className="w-full border-none rounded-[10px] placeholder:text-gray-700 bg-[#E9EAEC] pt-4 pb-4 pr-4 pl-8"
                    />
                    <Search
                      size={16}
                      className="absolute top-[32%] left-[1.5%] text-gray-600"
                    />
                  </div>
                  <div className="w-full max-w-md flex flex-col items-start gap-2">
                    <p className="text-xl font-bold text-gray-900">
                      Adresses récentes
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="flex items-center gap-2 max-w-md p-4 rounded-[10px] bg-orange-100">
        <span className="text-orange-600">
          <HiShieldCheck size={26} />
        </span>
        <span className="text-base text-gray-900">
          Ces informations seront transmises uniquement aux prestataires que
          vous réserverez.
        </span>
      </div>
    </div>
  );
};

export default Adress;

"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { HiShieldCheck } from "react-icons/hi";
import {
  ChevronsUpDown,
  Search,
  MoveLeft,
  Loader,
  X,
  ChevronRight,
  CirclePlus,
} from "lucide-react";
import { Input } from "../ui/input";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { FaLocationDot } from "react-icons/fa6";
import { useDebouncedCallback } from "use-debounce";
import { adresses } from "@/lib/data";
import { SearchAdress } from "@/lib/types";

const Adress = ({ category, title }: { category: string; title: string }) => {
  const [addManually, setAddManually] = useState<boolean>(false);
  const [isResearchingAdress, setIsResearchingAdress] =
    useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [resultSearchAdresses, setResultSearchAdresses] = useState<
    SearchAdress[] | null
  >(null);

  const [rue, setRue] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");

  const [isOpen, setIsOpen] = useState(false);

  const [searchHistory, setSearchHistory] = useState<SearchAdress | null>(null);

  const handleReturnToSearch = () => {
    setAddManually((prevSearchState) => !prevSearchState);
  };

  //   console.log(searchTerm);
  //   console.log(resultSearchAdresses);
  // console.log(searchHistory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const getSearchResults = useDebouncedCallback(() => {
    if (searchTerm !== "") {
      const results = adresses.filter((adress) =>
        adress.rue.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResultSearchAdresses(results);
      setIsResearchingAdress(false);
    } else {
      setResultSearchAdresses(null);
      setIsResearchingAdress(false);
    }
  }, 1000);

  useEffect(() => {
    setIsResearchingAdress(true);
    getSearchResults();
  }, [searchTerm]);

  const handleRemoveSearchTerm = () => {
    if (searchTerm) {
      setSearchTerm("");
      setResultSearchAdresses(null);
      setIsResearchingAdress(false);
    }
  };

  const handleAddToSearchHistory = (item: SearchAdress): void => {
    setSearchHistory(item);
    setSearchTerm("");
    setResultSearchAdresses(null);
    setIsOpen(false);
  };

  const handleAddRue = (e: ChangeEvent<HTMLInputElement>) => {
    setRue(e.target.value);
  };

  const handleAddPostalCode = (e: ChangeEvent<HTMLInputElement>) => {
    setPostalCode(e.target.value);
  };

  const manuallyAddAdress = () => {
    const adress = {
      id: 1,
      rue: rue,
    };
    handleAddToSearchHistory(adress);
  };

  return (
    <div className="flex flex-col items-center max-h-[600px] overflow-y-auto w-full max-w-2xl py-8">
      <div className="flex flex-col items-start mb-4">
        <p className="text-gray-800 font-semibold">{category}</p>
        <p className="text-3xl font-bold max-w-md">{title}</p>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger className="w-full max-w-md">
          <div className="relative w-full max-w-md mb-4 mt-2">
            <Input
              type="text"
              placeholder=""
              value={searchHistory?.rue}
              className="w-full text-gray-800 border-none rounded-[10px] bg-[#E9EAEC] p-4 pointer-events-none"
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
                    onClick={handleReturnToSearch}
                  >
                    <MoveLeft size={20} />
                  </span>
                  <p className="text-3xl font-bold text-gray-900 mt-4 mb-2">
                    Ajouter une adresse manuellement
                  </p>
                  <div className="relative flex flex-col items-start gap-2 w-full max-w-md mb-4">
                    <label htmlFor="address" className="text-gray-700">
                      Adresse complète
                    </label>
                    <Input
                      type="text"
                      id="address"
                      value={rue}
                      onChange={handleAddRue}
                      placeholder="Numero et nom de rue"
                      className="w-full border-none rounded-[10px] placeholder:text-gray-400 text-gray-800 bg-[#E9EAEC] pt-4 pb-4 pr-4 pl-8"
                    />
                    <Search
                      size={16}
                      className="absolute top-[63%] left-[1.5%] text-gray-600"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full max-w-md mb-4">
                    <label htmlFor="postalcode" className=" text-gray-700">
                      Code postal
                    </label>
                    <Input
                      type="text"
                      id="postalcode"
                      placeholder="20250"
                      value={postalCode}
                      onChange={handleAddPostalCode}
                      className="w-full border-none rounded-[10px] placeholder:text-gray-400 text-gray-800 bg-[#E9EAEC] p-4"
                    />
                  </div>
                  <button
                    disabled={!rue || !postalCode}
                    className={`border-none outline-none text-center w-full rounded-[10px] p-3 bg-orange-600 text-white transition duration-300 ease-in-out ${
                      !rue || !postalCode
                        ? "opacity-50"
                        : "opacity-100 hover:opacity-90"
                    }`}
                    onClick={manuallyAddAdress}
                  >
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
                      className="w-full border-transparent rounded-[10px] placeholder:text-gray-800 text-gray-800 bg-[#E9EAEC] pt-4 pb-4 pr-4 pl-8 focus:border-[2px] focus:border-orange-600"
                      value={searchTerm}
                      onChange={handleInputChange}
                    />
                    <Search
                      size={16}
                      className="absolute top-[32%] left-[1.5%] text-gray-600"
                    />
                    {searchTerm && (
                      <X
                        className={`absolute cursor-pointer flex items justify-center text-orange-600 bg-black/30 p-1 rounded-full top-[28%] ${
                          isResearchingAdress ? "left-[86%]" : "left-[93%]"
                        }`}
                        size={20}
                        onClick={handleRemoveSearchTerm}
                      />
                    )}
                    {isResearchingAdress ? (
                      <Loader
                        className="absolute animate-spin top-[23%] left-[93%] text-orange-600"
                        size={22}
                      />
                    ) : null}
                  </div>

                  {searchTerm && (
                    <div className="w-full flex flex-col items-start max-h-[300px] overflow-y-scroll noscroll-search-adress">
                      {resultSearchAdresses?.map((adress) => (
                        <div
                          className="flex items-center justify-between py-4 w-full pb-4 transition duration-300 ease-in-out border-b border-gray-300 cursor-pointer"
                          key={adress.id}
                          onClick={() => handleAddToSearchHistory(adress)}
                        >
                          <div className="flex items-center gap-2 w-full">
                            <FaLocationDot
                              className="text-orange-600"
                              size={17}
                            />
                            <span className="w-full flex-1 line-clamp-1 text-gray-800">
                              {adress.rue}
                            </span>
                          </div>
                          <ChevronRight size={20} className="text-gray-500" />
                        </div>
                      ))}
                    </div>
                  )}

                  {!searchTerm && searchHistory && (
                    <div className="w-full max-w-md flex flex-col items-start gap-2">
                      <p className="text-xl font-bold text-gray-900">
                        Adresses récentes
                      </p>
                      <div
                        className="flex items-center justify-between py-4 w-full pb-4 transition duration-300 ease-in-out border-b border-gray-300 cursor-pointer"
                        onClick={() => handleAddToSearchHistory(searchHistory)}
                      >
                        <div className="flex items-center gap-2 w-full">
                          <FaLocationDot
                            className="text-orange-600"
                            size={17}
                          />
                          <span className="w-full flex-1 line-clamp-1">
                            {searchHistory?.rue}
                          </span>
                        </div>
                        <ChevronRight size={20} className="text-gray-500" />
                      </div>
                    </div>
                  )}

                  <div
                    className="w-full flex items-center gap-2 pb-4 border-b border-gray-300 cursor-pointer"
                    onClick={handleReturnToSearch}
                  >
                    <CirclePlus size={22} className="text-orange-600" />
                    <span className="text-orange-600 font-semibold">
                      Ajouter une adresse manuellement
                    </span>
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

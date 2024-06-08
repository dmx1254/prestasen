"use client";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { GoCheckCircleFill } from "react-icons/go";
import { nbHours } from "@/lib/data";

const NbHours = ({ category, title }: { category: string; title: string }) => {
  const [activeIndex, setActiveIndex] = useState<string>("klo54");
  const [activeHour, setActiveHour] = useState<string>("4h00");
  const [disableMinus, setDisableMinus] = useState<boolean>(false);

  const handleActiveIndex = (indexId: string) => {
    setActiveIndex(indexId);
  };

  const handleIncreaseHour = () => {
    if (disableMinus) {
      setDisableMinus(false);
    }
    let hourIncrease = activeHour.split("h")[0];
    let minuteIncrease = activeHour.split("h")[1];

    if (minuteIncrease === "00") {
      let min: number = 30;
      let hour: string | number = hourIncrease + "h" + min.toString();
      setActiveHour(hour);
      if (hour === "2h00") {
        setActiveIndex("jio25");
      } else if (hour === "4h00") {
        setActiveIndex("klo54");
      } else if (hour === "6h00") {
        setActiveIndex("bax13");
      } else {
        setActiveIndex("");
      }
    } else if (minuteIncrease === "30") {
      let hourIncrement = Number(hourIncrease) + 1;
      let hourConc: string | number = hourIncrement.toString();

      let hour: string = hourConc + "h" + "00";
      setActiveHour(hour);
      if (hour === "2h00") {
        setActiveIndex("jio25");
      } else if (hour === "4h00") {
        setActiveIndex("klo54");
      } else if (hour === "6h00") {
        setActiveIndex("bax13");
      } else {
        setActiveIndex("");
      }
    }
  };

  const handleDecreaseHour = () => {
    let hourIncrease = activeHour.split("h")[0];
    let minuteIncrease = activeHour.split("h")[1];
    if (Number(hourIncrease) === 0) {
      if (minuteIncrease === "00") {
        setDisableMinus(true);
      } else {
        setDisableMinus(true);
      }
    }
    if (minuteIncrease === "00") {
      let min: number = 30;
      let newHour = Number(hourIncrease) - 1;
      let hour: string | number = newHour + "h" + min.toString();
      setActiveHour(hour);
      if (hour === "2h00") {
        setActiveIndex("jio25");
      } else if (hour === "4h00") {
        setActiveIndex("klo54");
      } else if (hour === "6h00") {
        setActiveIndex("bax13");
      } else {
        setActiveIndex("");
      }
    } else if (minuteIncrease === "30") {
      let min: string = "00";
      let hourIncrement = Number(hourIncrease);
      let hour: string | number = hourIncrement.toString() + "h" + min;
      setActiveHour(hour);
      if (hour === "2h00") {
        setActiveIndex("jio25");
      } else if (hour === "4h00") {
        setActiveIndex("klo54");
      } else if (hour === "6h00") {
        setActiveIndex("bax13");
      } else {
        setActiveIndex("");
      }
    }
  };

  return (
    <div className="flex flex-col items-center max-h-[600px] overflow-y-auto w-full max-w-2xl py-8">
      <div className="flex flex-col items-start mb-4">
        <p className="text-gray-800 font-semibold">{category}</p>
        <p className="text-3xl font-bold max-w-lg">{title}</p>
      </div>
      <div className="flex items-center gap-6">
        {nbHours.map(({ id, hour, title, desc, icon: Icon }) => (
          <div key={id} className="flex flex-col items-start gap-1">
            <button
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
              }}
              className={`relative flex flex-col outline-none hover:bg-black/5 ${
                activeIndex === id
                  ? "border-[3px] border-orange-600"
                  : "border-transparent"
              } items-center justify-center w-40 h-40 rounded-[8px]`}
              onClick={() => handleActiveIndex(id)}
            >
              <Icon />
              <span className="text-2xl text-gray-800 font-semibold">
                {hour}
              </span>
              {activeIndex === id ? (
                <span className="absolute z-[120] text-[26px] top-[-8%] left-[88%] bg-[#F7F7F7] rounded-full p-0.5">
                  <GoCheckCircleFill className="text-orange-600" />
                </span>
              ) : null}
            </button>
            <span className="font-semibold text-sm w-full max-w-400">
              {title}
            </span>
            <span className="text-xs text-gray-600 w-full max-w-40">
              {desc}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-10 mb-4">
        <span className="w-full border-b border-gray-300 ml-20"></span>
        <span className="text-gray-400 mx-2 text-sm">Ou</span>
        <span className="w-full border-b border-gray-300 mr-20"></span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span className="text-sm">
          Ajuster le nombre d&apos;heure manuellement
        </span>
        <div
          className="flex items-center bg-white p-2 rounded-[10px]"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
        >
          <button
            className={`flex items-center justify-center rounded-full bg-orange-600 text-white outline-none border-none p-1 ${
              disableMinus ? "opacity-50" : "opacity-100"
            }`}
            onClick={handleDecreaseHour}
            disabled={disableMinus}
          >
            <Minus />
          </button>
          <span className="text-xl font-semibold mx-2 text-gray-800">
            {activeHour}
          </span>
          <button
            className="flex items-center justify-center rounded-full bg-orange-600 text-white outline-none border-none p-1"
            onClick={handleIncreaseHour}
          >
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NbHours;

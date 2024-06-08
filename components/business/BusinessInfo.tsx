"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Mail, Upload, Clock4Icon, NotebookPen } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Calendar } from "../ui/calendar";
import { availableTimes } from "@/lib/data";

const BusinessInfo = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("");
  const [activeTimeIndex, setActiveTimeIndex] = useState<string>("");

  const handleTimeIndex = (timeIndex: string): void => {
    setActiveTimeIndex(timeIndex);
  };

  // console.log(date);
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src="/services/cleaning.jpg"
          alt="service title"
          className="object-cover object-center w-[150px] h-[150px] rounded-full"
        />
        <div className="flex flex-col items-start gap-2">
          <span className="text-center text-sm px-2 py-1 bg-orange-100 text-orange-600 rounded-full">
            Cleaning
          </span>
          <p className="text-2xl font-bold">House Cleaning</p>
          <p className="flex items-center gap-1 text-gray-500 text-base">
            <MapPin size={16} />
            255 Grand Park Ave, New york, 20250
          </p>
          <p className="flex items-center gap-1 text-gray-500 text-base">
            <Mail size={15} />
            account@service.com
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <span className="flex items-center justify-center p-2 rounded bg-orange-600 text-white">
          <Upload />
        </span>
        <div className="flex items-center gap-2">
          <img
            src="/services/cleaning.jpg"
            alt="shop name"
            className="w-10 h-10 object-cover object-center rounded-full"
          />
          <span className="text-sm font-semibold text-orange-600">
            Jenny Wilson
          </span>
        </div>

        <span className="flex items-center gap-2 text-gray-500 text-base">
          {" "}
          <Clock4Icon size={15} className="mt-[1px]" />
          Disponible de 08h:00 à 19h:00
        </span>
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex items-center justify-center gap-2 p-2 rounded text-sm bg-orange-600 text-white border-none outline-none">
              <NotebookPen size={17} className="mt-0.5" /> Prendre rendez-vous
            </button>
          </SheetTrigger>

          <SheetContent className="bg-[#F7F7F7] h-full overflow-y-auto py-2">
            <SheetHeader className="w-full">
              <SheetTitle className="text-lg font-semibold">
                Réserver une prestation
              </SheetTitle>
              {/* <SheetDescription className="w-full text-sm text-gray-600">
                Sélectionnez la date et le créneau horaire pour réserver un
                service
              </SheetDescription> */}
            </SheetHeader>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="w-full my-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded"

                  style={{
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                  }}
                />
              </div>
              <div className="w-full flex flex-col items-start">
                {/* <span className="text-sm font-semibold">
                  Sélectionnez un créneau horaire
                </span> */}
                <div className="w-full grid grid-cols-4 gap-4 mt-4">
                  {availableTimes.map((time, index) => (
                    <button
                      key={`${time}-${index}`}
                      className={`flex items-center justify-center outline-none border-none rounded-[10px] text-sm p-2 ${
                        activeTimeIndex === time
                          ? "bg-orange-600 text-white"
                          : "text-gray-700"
                      }`}
                      style={{
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                      }}
                      onClick={() => handleTimeIndex(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default BusinessInfo;

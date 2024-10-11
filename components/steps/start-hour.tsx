"use client";

import React, { useState } from "react";
import { availableTimes } from "@/lib/data";

const StartHour = ({
  category,
  title,
}: {
  category: string;
  title: string;
}) => {
  const [activeTimeIndex, setActiveTimeIndex] = useState<string>("");
  const handleTimeIndex = (timeIndex: string): void => {
    setActiveTimeIndex(timeIndex);
  };

  return (
    <div className="flex flex-col items-center max-h-[600px] overflow-y-auto w-full max-w-2xl py-8">
      <div className="flex flex-col items-start mb-4">
        <p className="text-gray-800 font-semibold">{category}</p>
        <p className="text-3xl font-bold max-w-lg">{title}</p>
      </div>
      <div className="w-full max-w-lg grid grid-cols-5 md:grid-cols-6 gap-4 mt-4">
        {availableTimes.map((time, index) => (
          <button
            key={`${time}-${index}`}
            className={`flex items-center justify-center outline-none border-none rounded-[50px] transition duration-300 ease-in-out font-semibold p-2 ${
              activeTimeIndex === time
                ? "bg-orange-600 text-white"
                : "text-gray-700 bg-black/5 hover:bg-black/10"
            }`}
           
            onClick={() => handleTimeIndex(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StartHour;

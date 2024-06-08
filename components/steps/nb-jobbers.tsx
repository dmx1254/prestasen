"use client";
import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const NbJobbers = ({
  category,
  title,
}: {
  category: string;
  title: string;
}) => {
  const [jobbers, setJobbers] = useState<number>(1);
  const increaseJobber = (): void => {
    setJobbers((prevJobbers: number) => prevJobbers + 1);
  };
  const decreaseJobber = (): void => {
    setJobbers((prevJobbers: number) =>
      prevJobbers > 1 ? prevJobbers - 1 : prevJobbers
    );
  };

  return (
    <div className="flex flex-col items-center max-h-[600px] overflow-y-auto w-full max-w-2xl py-8">
      <div className="flex flex-col items-start mb-4">
        <p className="text-gray-800 font-semibold">{category}</p>
        <p className="text-3xl font-bold max-w-lg">{title}</p>
      </div>
      <div className="flex items-center gap-6">
        <button
          className={`flex items-center justify-center text-center p-3 rounded-full bg-orange-600 text-white ${
            jobbers === 1 ? "opacity-60" : "opacity-100"
          }`}
          onClick={decreaseJobber}
          disabled={jobbers === 1}
        >
          <Minus />
        </button>
        <span className="text-gray-900 text-4xl font-bold">{jobbers}</span>
        <button
          className="flex items-center justify-center text-center p-3 rounded-full bg-orange-600 text-white"
          onClick={increaseJobber}
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default NbJobbers;

import React from "react";
import { Card } from "./ui/card";
import { FaStar } from "react-icons/fa";
import { Jobber } from "@/lib/types";
import Link from "next/link";

const CardProvider = ({ item }: { item: Jobber }) => {
  const returnLastAndFirstToLow = (
    last: string,
    first: string,
    id: string
  ): string => last.toLowerCase() + "-" + first.toLowerCase() + "-" + id;
  return (
    <Link
      href={`/jobber/${returnLastAndFirstToLow(
        item.lastname,
        item.firstname,
        item.id
      )}?skill=${item.job.toLowerCase()}`}
    >
      <Card className="flex w-full flex-col place-items-start border-none cursor-pointer">
        <img
          src={item.icon}
          alt={`jobber-${item.lastname}-${item.firstname}`}
          className="flex w-full transition-all hover:scale-105 rounded-[12px] object-cover object-center h-[180px]"
        />

        <div className="w-full flex flex-col items-start gap-2 p-2">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              <span className="text-sm font-bold text-gray-800">
                {item.lastname}
              </span>
              {item.isPro && (
                <span className="flex items-center justify-center text-xs rounded-[6px] px-1 py-0.5 bg-orange-600 text-white font-semibold">
                  Pro
                </span>
              )}
            </div>
            <span className="text-sm text-gray-800 font-semibold">
              {item.perHour} €/h
            </span>
          </div>
          <span className="text-sm text-gray-600">{item.job}</span>
          <div className="flex items-center gap-1">
            <FaStar className="text-[15px] text-yellow-500" />{" "}
            <span className="text-sm font-semibold">{item.starsAverage}</span>
            <span className="text-sm text-gray-600">({item.totalReviews})</span>
          </div>
          <div className="flex flex-col items-start gap-2">
            {item.qualities.map((qual, idx) => (
              <span
                key={idx}
                className="flex items-center justify-center p-1 rounded bg-gray-100 text-gray-800 text-sm"
              >
                {qual}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CardProvider;

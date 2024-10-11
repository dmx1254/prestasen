import React from "react";
import { Card } from "../ui/card";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const BusinessList = () => {
  return (
    <Card className="flex shadow-none flex-col items-start border-none gap-2 outline-none">
      <h3 className="text-lg font-bold pl-4">Services similaires</h3>
      <div className="scrollprofil max-h-[400px] overflow-y-scroll flex flex-col items-start gap-4 p-4">
        <div className="flex items-center gap-2">
          <img
            src="/services/cleaning.jpg"
            alt="jenny cleaning"
            className="w-20 h-20 object-cover object-center rounded-[8px]"
          />
          <div className="flex flex-col items-start">
            <p className="text-base font-bold">House Cleaning</p>
            <p className="text-sm text-orange-600 font-semibold">
              Jenny Wilson
            </p>
            <p className="text-sm text-gray-600 max-w-40">
              255 Grand Park Ave, New york
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/services/cleaning.jpg"
            alt="jenny cleaning"
            className="w-20 h-20 object-cover object-center rounded-[8px]"
          />
          <div className="flex flex-col items-start">
            <p className="text-base font-bold">House Cleaning</p>
            <p className="text-sm text-orange-600 font-semibold">
              Jenny Wilson
            </p>
            <p className="text-sm text-gray-600 max-w-40">
              255 Grand Park Ave, New york
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/services/cleaning.jpg"
            alt="jenny cleaning"
            className="w-20 h-20 object-cover object-center rounded-[8px]"
          />
          <div className="flex flex-col items-start">
            <p className="text-base font-bold">House Cleaning</p>
            <p className="text-sm text-orange-600 font-semibold">
              Jenny Wilson
            </p>
            <p className="text-sm text-gray-600 max-w-40">
              255 Grand Park Ave, New york
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/services/cleaning.jpg"
            alt="jenny cleaning"
            className="w-20 h-20 object-cover object-center rounded-[8px]"
          />
          <div className="flex flex-col items-start">
            <p className="text-base font-bold">House Cleaning</p>
            <p className="text-sm text-orange-600 font-semibold">
              Jenny Wilson
            </p>
            <p className="text-sm text-gray-600 max-w-40">
              255 Grand Park Ave, New york
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/services/cleaning.jpg"
            alt="jenny cleaning"
            className="w-20 h-20 object-cover object-center rounded-[8px]"
          />
          <div className="flex flex-col items-start">
            <p className="text-base font-bold">House Cleaning</p>
            <p className="text-sm text-orange-600 font-semibold">
              Jenny Wilson
            </p>
            <p className="text-sm text-gray-600 max-w-40">
              255 Grand Park Ave, New york
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/services/cleaning.jpg"
            alt="jenny cleaning"
            className="w-20 h-20 object-cover object-center rounded-[8px]"
          />
          <div className="flex flex-col items-start">
            <p className="text-base font-bold">House Cleaning</p>
            <p className="text-sm text-orange-600 font-semibold">
              Jenny Wilson
            </p>
            <p className="text-sm text-gray-600 max-w-40">
              255 Grand Park Ave, New york
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/services/cleaning.jpg"
            alt="jenny cleaning"
            className="w-20 h-20 object-cover object-center rounded-[8px]"
          />
          <div className="flex flex-col items-start">
            <p className="text-base font-bold">House Cleaning</p>
            <p className="text-sm text-orange-600 font-semibold">
              Jenny Wilson
            </p>
            <p className="text-sm text-gray-600 max-w-40">
              255 Grand Park Ave, New york
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BusinessList;

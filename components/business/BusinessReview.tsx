import React from "react";
import { Card } from "../ui/card";
import { FaStar } from "react-icons/fa";

const BusinessReview = () => {
  const active = true;
  return (
    <div className="w-full flex flex-col items-start maw-w-[600px] gap-4">
      <span className="text-lg font-bold">Avis et commentaires</span>
      <div className="flex flex-col items-start gap-1">
        <span className="flex items-center gap-0.5 text-2xl font-bold">
          <FaStar className="text-[28px] text-orange-600" />
          5,0
        </span>
        <span className="text-sm text-gray-600">sur 5 pour 212 avis</span>
      </div>
      <div className="flex items-center gap-8">
        <button
          className={`flex items-center justify-center px-2 py-1.5 rounded border-[1.5px] border-orange-600 bg-orange-50 text-orange-600 gap-1`}
        >
          Ménage (212)
        </button>
        <button className="flex items-center justify-center p-2 gap-1 rounded px-2 py-1.5 bg-gray-300">
          <FaStar className="text-[12px]" /> (212)
        </button>
        <button
          disabled
          className="flex items-center justify-center p-2 gap-1 rounded px-2 py-1.5 bg-gray-300 text-gray-500"
        >
          <FaStar className="text-[12px]" /> 4
        </button>
        <button
          disabled
          className="flex items-center justify-center p-2 gap-1 rounded px-2 py-1.5 bg-gray-300 text-gray-500"
        >
          <FaStar className="text-[12px]" /> 3
        </button>
        <button
          disabled
          className="flex items-center justify-center p-2 gap-1 rounded px-2 py-1.5 bg-gray-300 text-gray-500"
        >
          <FaStar className="text-[12px]" /> 2
        </button>
        <button
          disabled
          className="flex items-center justify-center p-2 gap-1 rounded px-2 py-1.5 bg-gray-300 text-gray-500"
        >
          <FaStar className="text-[12px]" /> 1
        </button>
      </div>
      <div className="w-full flex flex-col items-start gap-10 my-10">
        <Card className="w-full max-w-[600px] flex items-start gap-4 mx-4 border-none outline-none shadow-none">
          <div className="flex flex-col items-center gap-1">
            <img
              src="/services/cleaning.jpg"
              alt="user review"
              className="w-12 h-12 object-cover object-center rounded-full"
            />
            <span className="font-semibold">Théo</span>
            <span className="text-xs text-gray-500">Il y a 4 jours</span>
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <span>Aide au ménage</span>
            <span className="flex text-orange-600">
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
            </span>
            <span className="w-full text-sm text-gray-600">
              Super prestation, excellent relationnel, du matos approprié, une
              efficacité, Kellian sait ce qu&apos;il fait. Le travail est
              soigné. Le déménagement c&apos;est très bien passé grâce à lui.
            </span>
          </div>
        </Card>
        <Card className="w-full max-w-[600px] flex items-start gap-4 mx-4 border-none outline-none shadow-none">
          <div className="flex flex-col items-center gap-1">
            <img
              src="/services/cleaning.jpg"
              alt="user review"
              className="w-12 h-12 object-cover object-center rounded-full"
            />
            <span className="font-semibold">Mathieu</span>
            <span className="text-xs text-gray-500">Il y a 2 jours</span>
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <span>Aide au ménage</span>
            <span className="flex text-orange-600">
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
            </span>
            <span className="w-full text-sm text-gray-600">
              Super prestation, excellent relationnel, du matos approprié, une
              efficacité, Kellian sait ce qu&apos;il fait. Le travail est
              soigné. Le déménagement c&apos;est très bien passé grâce à lui.
            </span>
          </div>
        </Card>
        <Card className="w-full max-w-[600px] flex items-start gap-4 mx-4 border-none outline-none shadow-none">
          <div className="flex flex-col items-center gap-1">
            <img
              src="/services/cleaning.jpg"
              alt="user review"
              className="w-12 h-12 object-cover object-center rounded-full"
            />
            <span className="font-semibold">Sofie</span>
            <span className="text-xs text-gray-500">Il y a 3 jours</span>
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <span>Aide au ménage</span>
            <span className="flex text-orange-600">
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
            </span>
            <span className="w-full text-sm text-gray-600">
              Super prestation, excellent relationnel, du matos approprié, une
              efficacité, Kellian sait ce qu&apos;il fait. Le travail est
              soigné. Le déménagement c&apos;est très bien passé grâce à lui.
            </span>
          </div>
        </Card>
        <Card className="w-full max-w-[600px] flex items-start gap-4 mx-4 border-none outline-none shadow-none">
          <div className="flex flex-col items-center gap-1">
            <img
              src="/services/cleaning.jpg"
              alt="user review"
              className="w-12 h-12 object-cover object-center rounded-full"
            />
            <span className="font-semibold">Bernard</span>
            <span className="text-xs text-gray-500">Il y a 1 mois</span>
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <span>Aide au ménage</span>
            <span className="flex text-orange-600">
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
            </span>
            <span className="w-full text-sm text-gray-600">
              Super prestation, excellent relationnel, du matos approprié, une
              efficacité, Kellian sait ce qu&apos;il fait. Le travail est
              soigné. Le déménagement c&apos;est très bien passé grâce à lui.
            </span>
          </div>
        </Card>
        <Card className="w-full max-w-[600px] flex items-start gap-4 mx-4 border-none outline-none shadow-none">
          <div className="flex flex-col items-center gap-1">
            <img
              src="/services/cleaning.jpg"
              alt="user review"
              className="w-12 h-12 object-cover object-center rounded-full"
            />
            <span className="font-semibold">Sam</span>
            <span className="text-xs text-gray-500">Il y a 2 jours</span>
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <span>Aide au ménage</span>
            <span className="flex text-orange-600">
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
            </span>
            <span className="w-full text-sm text-gray-600">
              Super prestation, excellent relationnel, du matos approprié, une
              efficacité, Kellian sait ce qu&apos;il fait. Le travail est
              soigné. Le déménagement c&apos;est très bien passé grâce à lui.
            </span>
          </div>
        </Card>
      </div>
      <button
        className="flex transition duration-500 ease-out hover:opacity-80 items-center justify-center p-2 rounded text-orange-600 font-semibold -mt-2 text-sm"
        style={{
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        }}
      >
        Voir plus de commentaires
      </button>
    </div>
  );
};

export default BusinessReview;

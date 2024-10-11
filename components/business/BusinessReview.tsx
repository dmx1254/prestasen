import React from "react";
import { Card } from "../ui/card";
import { FaStar } from "react-icons/fa";
import { Jobber } from "@/lib/types";

const BusinessReview = ({ user }: { user: Jobber }) => {
  const active = true;
  return (
    <div className="w-full flex flex-col items-start maw-w-[600px] gap-4">
      <h3 className="text-xl text-gray-800 font-bold">Avis et commentaires</h3>
      <div className="flex flex-col items-start gap-1">
        <span className="flex items-center gap-1 text-[24px] text-gray-800 font-bold">
          <FaStar className="text-[26px] text-yellow-500" />
          {user.starsAverage}
        </span>
        <span className="text-sm text-gray-600">
          sur {user.starsAverage} pour {user.totalReviews} avis
        </span>
      </div>
      <div className="flex items-center gap-8">
        <button
          className={`flex items-center justify-center px-2 py-1.5 rounded border-[1.5px] border-orange-600 text-orange-600 gap-1`}
        >
          Ménage (212)
        </button>
        <button className="flex items-center justify-center p-2 gap-1 rounded px-2 py-1.5 bg-gray-200">
          <FaStar className="text-[12px] text-gray-800" /> (212)
        </button>
        <button
          disabled
          className="flex items-center justify-center p-2 gap-1 rounded px-2 py-1.5 bg-gray-200 text-gray-500"
        >
          <FaStar className="text-[12px]" /> 4
        </button>
        <button
          disabled
          className="flex items-center justify-center p-2 gap-1 rounded px-2 py-1.5 bg-gray-200 text-gray-500"
        >
          <FaStar className="text-[12px]" /> 3
        </button>
        <button
          disabled
          className="flex items-center justify-center p-2 gap-1 rounded px-2 py-1.5 bg-gray-200 text-gray-500"
        >
          <FaStar className="text-[12px]" /> 2
        </button>
        <button
          disabled
          className="flex items-center justify-center p-2 gap-1 rounded px-2 py-1.5 bg-gray-200 text-gray-500"
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
            <span className="font-semibold text-gray-800">Théo</span>
            <span className="text-xs text-gray-500">Il y a 4 jours</span>
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <span>Aide au ménage</span>
            <span className="flex text-yellow-500">
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
            </span>
            <span className="w-full text-sm text-gray-600">
              Super prestation, excellent relationnel, du matos approprié, une
            </span>
            <div className="flex items-center gap-2 bg-gray-50 py-0.5 pr-1 border border-gray-200 rounded-full">
              <img
                src="/compliments/relation.png"
                alt="compliment"
                className="w-[20px] h-[20px] object-cover object-center rounded-full"
              />
              <span className="text-xs text-gray-500 font-semibold">
                Excellent relationnel
              </span>
            </div>
          </div>
        </Card>
        <Card className="w-full max-w-[600px] flex items-start gap-4 mx-4 border-none outline-none shadow-none">
          <div className="flex flex-col items-center gap-1">
            <img
              src="/services/cleaning.jpg"
              alt="user review"
              className="w-12 h-12 object-cover object-center rounded-full"
            />
            <span className="font-semibold text-gray-800">Mathieu</span>
            <span className="text-xs text-gray-500">Il y a 2 jours</span>
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <span>Aide au ménage</span>
            <span className="flex text-yellow-500">
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
              <FaStar className="text-[10px]" />
            </span>
            <span className="w-full text-sm text-gray-600">
              Super prestation, excellent relationnel, du matos approprié, une
              efficacité, Kellian sait ce qu&apos;il fait. Le travail est
              soigné.
            </span>
            <div className="flex items-center gap-2 flex items-center gap-2 bg-gray-50 py-0.5 pr-1 border border-gray-200 rounded-full">
              <img
                src="/compliments/soigne.png"
                alt="compliment"
                className="w-[20px] h-[20px] object-cover object-center rounded-full"
              />
              <span className="text-xs text-gray-600 font-semibold">
                Travail soigné
              </span>
            </div>
          </div>
        </Card>
        <Card className="w-full max-w-[600px] flex items-start gap-4 mx-4 border-none outline-none shadow-none">
          <div className="flex flex-col items-center gap-1">
            <img
              src="/services/cleaning.jpg"
              alt="user review"
              className="w-12 h-12 object-cover object-center rounded-full"
            />
            <span className="font-semibold text-gray-800">Sofie</span>
            <span className="text-xs text-gray-500">Il y a 3 jours</span>
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <span>Aide au ménage</span>
            <span className="flex text-yellow-500">
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
            <div className="flex items-center gap-2 bg-gray-50 py-0.5 pr-1 border border-gray-200 rounded-full">
              <img
                src="/compliments/relation.png"
                alt="compliment"
                className="w-[20px] h-[20px] object-cover object-center rounded-full"
              />
              <span className="text-xs text-gray-600 font-semibold">
                Excellent relationnel
              </span>
            </div>
          </div>
        </Card>
        <Card className="w-full max-w-[600px] flex items-start gap-4 mx-4 border-none outline-none shadow-none">
          <div className="flex flex-col items-center gap-1">
            <img
              src="/services/cleaning.jpg"
              alt="user review"
              className="w-12 h-12 object-cover object-center rounded-full"
            />
            <span className="font-semibold text-gray-800">Bernard</span>
            <span className="text-xs text-gray-500">Il y a 1 mois</span>
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <span>Aide au ménage</span>
            <span className="flex text-yellow-500">
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
            <span className="font-semibold text-gray-800">Sam</span>
            <span className="text-xs text-gray-500">Il y a 2 jours</span>
          </div>
          <div className="flex flex-col items-start gap-2 flex-1">
            <span>Aide au ménage</span>
            <span className="flex text-yellow-500">
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
      <button className="flex transition duration-500 ease-out hover:opacity-80 items-center border border-gray-200 justify-center p-2 rounded text-orange-600 font-semibold -mt-2 text-sm">
        Voir plus de commentaires
      </button>
    </div>
  );
};

export default BusinessReview;

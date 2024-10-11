import React from "react";
import { Card } from "../ui/card";
import { Jobber } from "@/lib/types";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";

const BusinessInfo = ({ user }: { user: Jobber }) => {
  return (
    <Card className="w-full flex flex-col items-center justify-center gap-2 border border-gray-200 rounded p-4">
      <div className="relative">
        <img
          src={user.icon}
          alt={`jobber-${user.lastname}-${user.firstname}`}
          className="w-[100px] h-[100px] object-cover object-center rounded-full"
        />
        {user.isVerified && (
          <RiVerifiedBadgeFill
            className="absolute bg-white rounded-full top-[4%] left-[75%] text-green-600"
            size={22}
          />
        )}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          {user.isVerified ? <RiVerifiedBadgeFill className="text-green-600" size={20} /> : <RiVerifiedBadgeFill className="text-gray-500" size={20} />}
          <span className="text-sm text-gray-800">
            {user.isVerified ? "Identité vérifiée" : "Identité non vérifiée"}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {user.isPro && (
            <span className="flex items-center justify-center text-xs rounded-[6px] px-1 py-0.5 bg-orange-600 text-white font-semibold">
              Pro
            </span>
          )}
          <span className="text-sm text-gray-800">Entreprise vérifiée</span>
        </div>
        <div className="flex items-center gap-1">
          <FaStar className="text-[15px] text-yellow-500" />{" "}
          <span className="text-sm font-semibold">{user.starsAverage}</span>
          <span className="text-sm text-gray-600">({user.totalReviews})</span>
        </div>
        <span className="text-sm text-gray-800 font-bold">
          {49} jobs réalisés
        </span>
        <button className="text-center w-full max-w-48 border-none outline-none rounded-[10px] bg-orange-600 text-white px-4 py-2 transition duration-200 ease-in-out hover:opacity-90">
          Demander un service de {user.job}
        </button>
      </div>
    </Card>
  );
};

export default BusinessInfo;

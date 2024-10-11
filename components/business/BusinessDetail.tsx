import React from "react";
import { Jobber } from "@/lib/types";

import { BriefcaseBusiness, Medal } from "lucide-react";
import BusinessReview from "./BusinessReview";
import BusinessGalery from "./BusinessGalery";

const BusinessDetail = ({ user }: { user: Jobber }) => {
  return (
    <div className="w-full flex flex-col items-start gap-4">
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-1">
          <h2 className="text-2xl text-gray-800 font-bold">{user.lastname}</h2>
          {user.isPro && (
            <span className="flex items-center justify-center text-xs rounded-[6px] px-1 py-0.5 bg-orange-600 text-white font-semibold">
              Pro
            </span>
          )}
        </div>
        <span className="text-sm text-gray-600">Membre depuis un an</span>
      </div>
      <div className="w-full flex flex-col items-start gap-4">
        <p className="flex text-base text-gray-800 w-full">
          Propriétaire d'un chatbet amoureuse des animaux, je saurais prodiguer
          les soins nécessaires à vos boules de poil: piqûre pour diabète, don
          de médicament, changer la litière, donner à manger, câliner et
          jouer... sont une partie des compétences que j'ai acquis dephus que
          j'ai commencé le pet sitting.
        </p>
        <div className="w-full flex items-center gap-2 pb-4 border-b border-gray-200">
          <span className="flex items-center gap-1 text-sm  text-gray-600">
            <BriefcaseBusiness size={14} className="text-orange-600" />
            Possède Litière,
          </span>
          <span className="text-sm text-gray-600">Caisse de transport,</span>
          <span className="text-sm text-gray-600">Arbre à chat</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-2 pb-4 border-b border-gray-200">
        <h3 className="text-xl text-gray-800 font-bold">
          Diplômes et expériences
        </h3>
        <div className="w-full flex items-center gap-1">
          <Medal size={14} className="text-orange-600" />
          <span className="text-sm text-gray-600">2 à 4 ans d'expérience</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-2 pb-4 border-b border-gray-200">
        <h3 className="text-xl text-gray-800 font-bold">
          Mes engagements clients
        </h3>
        <div className="w-full flex items-center gap-2">
          {user.qualities.map((qual, idx) => (
            <span
              key={idx}
              className="flex items-center justify-center p-1 rounded bg-gray-100 text-gray-800 text-sm"
            >
              {qual}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-4 pb-4 border-b border-gray-200">
        <h3 className="text-xl text-gray-800 font-bold">
          Compliments reçus (25)
        </h3>
        <div className="w-full flex items-center gap-2">
          <div className="relative flex flex-col items-center text-center gap-1">
            <img
              src="/compliments/relation.png"
              alt="compliments"
              className="w-[60px] h-[60px] rounded-full object-cover object-center"
            />
            <span className="text-sm text-gray-600 max-w-20">
              Excellent relationnel
            </span>
            <span className="absolute flex items-center justify-center w-6 h-6 text-xs bg-gray-700 border-[2px] z-10 border-white rounded-full text-white top-[-6%] left-[65%]">
              16
            </span>
          </div>
          <div className="relative flex flex-col items-center text-center gap-1">
            <img
              src="/compliments/efficacite.png"
              alt="compliments"
              className="w-[60px] h-[60px] rounded-full object-cover object-center"
            />
            <span className="text-sm text-gray-600 max-w-20">
              Très efficace
            </span>
            <span className="absolute flex items-center justify-center w-6 h-6 text-xs bg-gray-700 border-[2px] z-10 border-white rounded-full text-white top-[-6%] left-[65%]">
              3
            </span>
          </div>
          <div className="relative flex flex-col items-center text-center gap-1">
            <img
              src="/compliments/soigne.png"
              alt="compliments"
              className="w-[60px] h-[60px] rounded-full object-cover object-center"
            />
            <span className="text-sm text-gray-600 max-w-20">
              Travail soigné
            </span>
            <span className="absolute flex items-center justify-center w-6 h-6 text-xs bg-gray-700 border-[2px] z-10 border-white rounded-full text-white top-[-6%] left-[65%]">
              6
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-4 pb-4 border-b border-gray-200">
        <h3 className="text-xl text-gray-800 font-bold">Mes travaux</h3>
        <BusinessGalery />
      </div>
      <div>
        <BusinessReview user={user} />
      </div>
    </div>
  );
};

export default BusinessDetail;

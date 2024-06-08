import BusinessDesc from "@/components/business/BusinessDesc";
import BusinessGalery from "@/components/business/BusinessGalery";
import BusinessInfo from "@/components/business/BusinessInfo";
import BusinessList from "@/components/business/BusinessList";
import BusinessReview from "@/components/business/BusinessReview";
import React from "react";

const page = ({ params }: { params: { shopname: string } }) => {
  const { shopname } = params;
  return (
    <div className="w-full flex flex-col px-4 gap-8 items-start font-ibm-plex-serif my-4 md:my-8">
      <div className="w-full">
        <BusinessInfo />
      </div>
      <div className="w-full flex items-start justify-between">
        <div>
          <BusinessDesc />
        </div>
        <div>
          <BusinessList />
        </div>
      </div>
      <div className="-mt-[280px]">
        <BusinessGalery />
      </div>
      <div>
        <BusinessReview />
      </div>
    </div>
  );
};

export default page;

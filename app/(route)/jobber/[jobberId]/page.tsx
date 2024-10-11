import BusinessDesc from "@/components/business/BusinessDesc";
import BusinessDetail from "@/components/business/BusinessDetail";
import BusinessGalery from "@/components/business/BusinessGalery";
import BusinessInfo from "@/components/business/BusinessInfo";
import BusinessList from "@/components/business/BusinessList";
import BusinessReview from "@/components/business/BusinessReview";
import { jobber } from "@/lib/data";
import React from "react";

const JobberPage = ({
  params,
  searchParams,
}: {
  params: { jobberId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { jobberId } = params;
  const { skill } = searchParams;
  const userId = jobberId.split("-")[2];
  const user = jobber.filter((user) => user.id === userId)[0];

  // console.log(user);

  return (
    <div className="w-full max-w-5xl mx-auto my-28 flex items-center justify-center flex-col lg:flex-row px-4 gap-8 lg:items-start font-mulish">
      {/* hi there!<br />
      jobberId: {userId}<br />
      skill: {skill}<br /> */}
      <div className="w-full max-w-[250px] lg:sticky lg:top-[122px]">
        <BusinessInfo user={user} />
      </div>
      <div className="flex flex-1">
        <BusinessDetail user={user} />
      </div>
    </div>
  );
};

export default JobberPage;

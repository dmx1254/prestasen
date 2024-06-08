import React from "react";
import { Card } from "../ui/card";

const BusinessDesc = () => {
  return (
    <Card className="w-full shadow-none flex flex-col items-start gap-2 border-none outline-none">
      <h3 className="text-lg font-bold">Description</h3>
      <p className="flex max-w-[600px] text-base text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, enim id
        dolor harum exercitationem aliquam nesciunt eligendi totam, eum ipsa
        eius quis nulla aperiam quos praesentium fuga mollitia accusamus facere
        quas architecto tempore non laborum. Totam quia eum molestiae dolor,
        quos quam laborum ipsam distinctio eaque facilis officiis maiores sequi
      </p>
    </Card>
  );
};

export default BusinessDesc;

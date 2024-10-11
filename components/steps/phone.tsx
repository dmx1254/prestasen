"use client";

import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { E164Number } from "libphonenumber-js/core";

const Phone = ({ category, title }: { category: string; title: string }) => {
  const [phone, setPhone] = useState<E164Number>();
  return (
    <div className="flex flex-col items-center max-h-[600px] overflow-y-auto w-full max-w-[450px] py-8">
      <div className="flex flex-col items-start mb-4">
        <p className="text-gray-800 font-semibold">{category}</p>
        <p className="text-3xl font-bold max-w-lg">{title}</p>
        <div className="flex w-full">
          <PhoneInput
            defaultCountry="SN"
            placeholder="+221"
            international
            withCountryCallingCode
            value={phone}
            onChange={setPhone}
            className="input-phone w-full rounded text-lg font-semibold placeholder:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Phone;

"use client";
import React, { useEffect, useState } from "react";

import { steps } from "@/lib/data";
import { Step } from "@/lib/types";
import { useRouter } from "next/navigation";
import { Progress } from "./ui/progress";
import { UserRoundCheck, Phone, Umbrella } from "lucide-react";

const PageSteps = () => {
  const router = useRouter();
  const [stepper, setStepper] = useState<number>(0);
  const [index, setIndex] = useState<number>(steps[stepper].stepIndex);
  const initialStep = steps.find((step) => step.stepIndex === index);
  const [stepsJobs, setStepsJobs] = useState<Step | undefined>(initialStep);
  const [percentColor, setPercentColor] = useState<number>(0);
  const [stepsLength, setStepsLength] = useState<number>(steps.length);

  // console.log(stepsJobs);
  //   console.log("stepper", stepper);
  //   console.log("index", index);
  //   console.log("donnes de index", steps[index]);
  //   console.log(percentColor);

  // console.log("stepper: " + stepper, "index: " + index);

  useEffect(() => {
    router.push(`#/${stepsJobs?.stepLink}`);
  }, [stepsJobs]);

  const handleChangeStepFollowing = () => {
    setStepper((prevStepper) =>
      prevStepper < steps.length - 1 ? prevStepper + 1 : prevStepper
    );
  };
  const handleChangeStepPrevious = () => {
    setStepper((prevStepper) =>
      prevStepper >= 1 ? prevStepper - 1 : prevStepper
    );
  };
  useEffect(() => {
    setIndex(steps[stepper].stepIndex);
  }, [stepper]);

  useEffect(() => {
    const initialStep = steps.find((step) => step.stepIndex === index);
    setStepsJobs(initialStep);
  }, [index]);

  useEffect(() => {
    setPercentColor(Math.ceil((stepper / steps.length) * 100));
  }, [stepper]);

  return (
    <div className="relative flex flex-col items-center text-black w-full">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center justify-around w-full p-4">
          <span className="flex items-center gap-1">
            <UserRoundCheck className="text-orange-600" size={20} />
            Prestation encadree et profils verifies
          </span>
          <span className="flex items-center gap-1">
            <Phone className="text-orange-600" size={20} />
            Service client 6j/7 de 9h à 18h
          </span>
          <span className="flex items-center gap-1">
            <Umbrella className="text-orange-600" size={20} />
            Service assure par AXA
          </span>
        </div>
        <div className="w-full rounded-none">
          <Progress value={percentColor} />
        </div>
      </div>
      <div></div>

      {stepsJobs ? (
        <stepsJobs.stepComponent
          category={stepsJobs.category}
          title={stepsJobs.title}
          nbhours={0}
          day={new Date()}
        />
      ) : (
        <div className="text-3xl text-red-600 my-20 text-center">
          Une erreur s&apos;est produite
        </div>
      )}
      <div className="fixed p-4 flex items-center justify-around w-full z-[40] bottom-0 left-0 right-0 bg-[#F7F7F7]">
        <button
          className={`text-center text-orange-600 font-semibold ${
            index === 1 ? "opacity-60" : "opacity-100"
          }`}
          onClick={handleChangeStepPrevious}
          disabled={index === 1}
        >
          Retour
        </button>
        <button
          className="text-center outline-none border-none bg-orange-600 text-white rounded font-semibold p-3"
          onClick={handleChangeStepFollowing}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default PageSteps;

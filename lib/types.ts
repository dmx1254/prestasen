import { ComponentType } from "react";

export type Category = {
  id: string;
  icon: string;
  title: string;
  active: boolean;
};

export type Service = {
  id: string;
  icon: string;
  category: string;
  title: string;
  fullname: string;
  address: string;
};

type StepCompProps = {
  category?: string;
  title?: string;
  nbhours: number;
  day: Date;
};

export type Step = {
  stepId: string;
  category?: string;
  title?: string;
  stepComponent: any;
  stepIndex: number;
  stepLink: string;
};

export type NbHour = {
  id: string;
  hour: string;
  title: string;
  desc: string;
  icon: ComponentType<any>;
  isActive: boolean;
};

export type SearchAdress = {
  id: number;
  rue: string;
};

export type Jobber = {
    id: string;
    icon: string;
    lastname: string;
    firstname: string;
    job: string;
    isPro: boolean;
    totalReviews: number;
    perHour: number;
    starsAverage: number;
    qualities: string[];
    isVerified: boolean;
  }
  

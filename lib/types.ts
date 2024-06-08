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
  stepComoponent: React.ComponentType<StepCompProps>;
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

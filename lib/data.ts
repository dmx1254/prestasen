import NbHours from "@/components/steps/nb-hours";
import NbJobbers from "@/components/steps/nb-jobbers";
import DateJobs from "@/components/steps/date-jobs";
import StartHour from "@/components/steps/start-hour";
import Adress from "@/components/steps/adress";

import {
  additionnal,
  appliances,
  architect,
  cabinet,
  carpenty,
  carpet,
  cleaning,
  driveway,
  drywall,
  fences,
  flooring,
  garages,
} from "@/components/PopolarSvg";
import { Category, NbHour, Service, Step } from "./types";
import { TwoHour } from "@/public/svghours/twohour";
import { FourHour } from "@/public/svghours/fourhour";
import { SixHour } from "@/public/svghours/sixhour";

export const dataService = [
  {
    id: "derty",
    svgIcon: additionnal,
    title: "Ajouts & rénovations",
  },
  {
    id: "derop",
    svgIcon: appliances,
    title: "Electroménagers",
  },

  {
    id: "lapop",
    svgIcon: architect,
    title: "Architectes & ingénieurs",
  },
  {
    id: "lazls",
    svgIcon: cabinet,
    title: "Armoires & comptoirs",
  },
  {
    id: "mzqla",
    svgIcon: carpenty,
    title: "Menuiserie",
  },
  {
    id: "wamzo",
    svgIcon: carpet,
    title: "Tapis",
  },
  {
    id: "gialq",
    svgIcon: cleaning,
    title: "Nettoyage & ménage",
  },
  {
    id: "yzald",
    svgIcon: driveway,
    title: "Allées, patios & promenades",
  },
  {
    id: "xkamk",
    svgIcon: drywall,
    title: "Peintures & carrelage",
  },
  {
    id: "cpaqr",
    svgIcon: fences,
    title: "Clôtures",
  },
  {
    id: "dqoqr",
    svgIcon: flooring,
    title: "Jardinnage",
  },
  {
    id: "cpuip",
    svgIcon: garages,
    title: "Garages",
  },
];

export const categories: Category[] = [
  {
    id: "jhun12",
    icon: "/category/cleaning.png",
    title: "Ménage",
    active: false,
  },
  {
    id: "plma85",
    icon: "/category/painting.png",
    title: "Peinture",
    active: false,
  },
  {
    id: "laqpb34",
    icon: "/category/shifting.png",
    title: "Livraison",
    active: false,
  },
  {
    id: "ij87qm",
    icon: "/category/plumbing.png",
    title: "Plomberie",
    active: false,
  },
  {
    id: "paz61d",
    icon: "/category/repair.png",
    title: "Réparation",
    active: false,
  },
  {
    id: "jhun12",
    icon: "/category/electric.png",
    title: "Electricité",
    active: false,
  },
];

export const servicelist: Service[] = [
  {
    id: "jnmkhs",
    icon: "/services/cleaning.jpg",
    category: "Ménage",
    title: "Lavage d'habits",
    fullname: "Emama Potter",
    address: "525 N Tyron Street, New York",
  },
  {
    id: "jnmksw",
    icon: "/services/cleaning.jpg",
    category: "Ménage",
    title: "Lavage d'habits",
    fullname: "Emama Potter",
    address: "525 N Tyron Street, New York",
  },
  {
    id: "jqlvap",
    icon: "/services/cleaning.jpg",
    category: "Ménage",
    title: "Lavage d'habits",
    fullname: "Emama Potter",
    address: "525 N Tyron Street, New York",
  },
  {
    id: "jqpzwe",
    icon: "/services/cleaning.jpg",
    category: "Ménage",
    title: "Lavage d'habits",
    fullname: "Emama Potter",
    address: "525 N Tyron Street, New York",
  },
  {
    id: "jksjwe",
    icon: "/services/cleaning.jpg",
    category: "Ménage",
    title: "Lavage d'habits",
    fullname: "Emama Potter",
    address: "525 N Tyron Street, New York",
  },
  {
    id: "jkzqwe",
    icon: "/services/cleaning.jpg",
    category: "Ménage",
    title: "Lavage d'habits",
    fullname: "Emama Potter",
    address: "525 N Tyron Street, New York",
  },
  {
    id: "pzqmla",
    icon: "/services/cleaning.jpg",
    category: "Ménage",
    title: "Lavage d'habits",
    fullname: "Emama Potter",
    address: "525 N Tyron Street, New York",
  },
  {
    id: "pzqxfr",
    icon: "/services/cleaning.jpg",
    category: "Ménage",
    title: "Lavage d'habits",
    fullname: "Emama Potter",
    address: "525 N Tyron Street, New York",
  },
  {
    id: "hwnapl",
    icon: "/services/cleaning.jpg",
    category: "Ménage",
    title: "Lavage d'habits",
    fullname: "Emama Potter",
    address: "525 N Tyron Street, New York",
  },
  {
    id: "tkyzal",
    icon: "/services/cleaning.jpg",
    category: "Ménage",
    title: "Lavage d'habits",
    fullname: "Emama Potter",
    address: "525 N Tyron Street, New York",
  },
];

export const availableTimes: string[] = [
  "07h:00",
  "07h:30",
  "08h:00",
  "08h:30",
  "09h:00",
  "09h:30",
  "10h:00",
  "10h:30",
  "11h:00",
  "11h:30",
  "12h:00",
  "12h:30",
  "13h:00",
  "13h:30",
  "14h:00",
  "14h:30",
  "15h:00",
  "15h:30",
  "16h:00",
  "16h:30",
  "17h:00",
  "17h:30",
  "18h:00",
  "18h:30",
  "19h:00",
  "19h:30",
  "20h:00",
];

export const steps: Step[] = [
  {
    stepId: "GHY122R",
    category: "Assemblage de meubles",
    title: "De combien d’heures de service avez-vous besoin ?",
    stepComoponent: NbHours,
    stepIndex: 1,
    stepLink: "nb-hours",
  },
  {
    stepId: "KPL421Z",
    stepComoponent: NbJobbers,
    stepIndex: 2,
    stepLink: "nb-jobbers",
    category: "Assemblage de meubles",
    title: "De combien de prestataires avez-vous besoin ?",
  },
  {
    stepId: "PQM265U",
    stepComoponent: DateJobs,
    stepIndex: 3,
    stepLink: "date",
    category: "Assemblage de meubles",
    title: "Quel jour vous convient le mieux ?",
  },
  {
    stepId: "PQM731V",
    stepComoponent: StartHour,
    stepIndex: 4,
    stepLink: "start-hour",
    category: "Assemblage de meubles",
    title: "Quelle heure vous convient le mieux ?",
  },
  {
    stepId: "PQM103G",
    stepComoponent: Adress,
    stepIndex: 5,
    stepLink: "address",
    category: "Assemblage de meubles",
    title: "Quelle est l'adresse de la prestation ?",
  },
];

export const nbHours: NbHour[] = [
  {
    id: "jio25",
    hour: "2h00",
    title: "Court",
    desc: "Exemple : 2 à 4 chaises, fauteuils...",
    icon: TwoHour,
    isActive: false,
  },
  {
    id: "klo54",
    hour: "4h00",
    title: "Classique",
    desc: "Exemple : Une commode et un lit...",
    icon: FourHour,
    isActive: true,
  },
  {
    id: "bax13",
    hour: "6h00",
    title: "Long",
    desc: "Exemple : Une grande armoire ou plusieurs meubles...",
    icon: SixHour,
    isActive: false,
  },
];

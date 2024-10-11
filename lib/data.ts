import NbHours from "@/components/steps/nb-hours";
import NbJobbers from "@/components/steps/nb-jobbers";
import DateJobs from "@/components/steps/date-jobs";
import StartHour from "@/components/steps/start-hour";
import Adress from "@/components/steps/adress";
import Phone from "@/components/steps/phone";

import {
  bricolage,
  jardinage,
  demenage,
  menage,
  enfant,
  animaux,
  informatique,
  aideadomicile,
  coursparticuliers,
} from "@/components/PopolarSvg";
import { Category, Jobber, NbHour, SearchAdress, Service, Step } from "./types";
import { TwoHour } from "@/public/svghours/twohour";
import { FourHour } from "@/public/svghours/fourhour";
import { SixHour } from "@/public/svghours/sixhour";

export const dataService = [
  {
    id: "derty",
    svgIcon: bricolage,
    title: "Bricolage",
  },
  {
    id: "derop",
    svgIcon: jardinage,
    title: "Jardinnage",
  },

  {
    id: "lapop",
    svgIcon: demenage,
    title: "Déménagement",
  },
  {
    id: "lazls",
    svgIcon: menage,
    title: "Ménage",
  },
  {
    id: "mzqla",
    svgIcon: enfant,
    title: "Enfants",
  },
  {
    id: "wamzo",
    svgIcon: animaux,
    title: "Animaux",
  },
  {
    id: "gialq",
    svgIcon: informatique,
    title: "Informatique",
  },
  {
    id: "yzald",
    svgIcon: aideadomicile,
    title: "Aide à domicile",
  },
  {
    id: "xkamk",
    svgIcon: coursparticuliers,
    title: "Cours particuliers",
  },
];

export const jobber: Jobber[] = [
  {
    id: "yhup14",
    icon: "/providers/man.jpg",
    lastname: "Michel",
    firstname: "Grasse",
    job: "Jardinnier",
    isPro: true,
    totalReviews: 33,
    perHour: 10,
    starsAverage: 4.5,
    qualities: [
      "Calme et patient",
      "Nouvelles régulières",
      "Fiable et responsable",
    ],
    isVerified: true,
  },
  {
    id: "tjop57",
    icon: "/providers/woman.jpg",
    lastname: "Dupont",
    firstname: "Sophie",
    job: "Peintre",
    isPro: true,
    totalReviews: 45,
    perHour: 13,
    starsAverage: 4.7,
    qualities: ["Créative et minutieuse", "Respect des délais", "Ponctuelle"],
    isVerified: true,
  },
  {
    id: "wkld23",
    icon: "/providers/man.jpg",
    lastname: "Lefevre",
    firstname: "Paul",
    job: "Plombier",
    isPro: false,
    totalReviews: 27,
    perHour: 17,
    starsAverage: 4.3,
    qualities: [
      "Rapide et efficace",
      "Tarifs abordables",
      "Disponible en urgence",
    ],
    isVerified: false,
  },
  {
    id: "amnb34",
    icon: "/providers/woman.jpg",
    lastname: "Moreau",
    firstname: "Claire",
    job: "Électricienne",
    isPro: true,
    totalReviews: 52,
    perHour: 21,
    starsAverage: 4.9,
    qualities: ["Professionnelle", "Matériel de qualité", "Très recommandée"],
    isVerified: false,
  },
  {
    id: "gkhr21",
    icon: "/providers/man.jpg",
    lastname: "Bernard",
    firstname: "Jean",
    job: "Mécanicien",
    isPro: false,
    totalReviews: 38,
    perHour: 18,
    starsAverage: 4.2,
    qualities: [
      "Sérieux et honnête",
      "Prix compétitifs",
      "Réparations rapides",
    ],
    isVerified: true,
  },
  {
    id: "ojmd45",
    icon: "/providers/woman.jpg",
    lastname: "Martin",
    firstname: "Isabelle",
    job: "Ménage",
    isPro: true,
    totalReviews: 120,
    perHour: 16,
    starsAverage: 4.8,
    qualities: ["Très soignée", "Discrète", "Flexible"],
    isVerified: true,
  },
  {
    id: "plmo78",
    icon: "/providers/man.jpg",
    lastname: "Roux",
    firstname: "Vincent",
    job: "Menuisier",
    isPro: true,
    totalReviews: 41,
    perHour: 11,
    starsAverage: 4.6,
    qualities: [
      "Travail de précision",
      "Matériaux durables",
      "Conseils avisés",
    ],
    isVerified: true,
  },
  {
    id: "qbnv12",
    icon: "/providers/woman.jpg",
    lastname: "Petit",
    firstname: "Julie",
    job: "Couturière",
    isPro: false,
    totalReviews: 29,
    perHour: 25,
    starsAverage: 4.4,
    qualities: ["Créative", "Détail minutieux", "Respect des attentes"],
    isVerified: false,
  },
  {
    id: "zxvc56",
    icon: "/providers/man.jpg",
    lastname: "Simon",
    firstname: "Marc",
    job: "Maçon",
    isPro: true,
    totalReviews: 36,
    perHour: 15,
    starsAverage: 4.5,
    qualities: ["Travail robuste", "Délais respectés", "Bonne communication"],
    isVerified: false,
  },
  {
    id: "nmko90",
    icon: "/providers/woman.jpg",
    lastname: "Garcia",
    firstname: "Lucie",
    job: "Plâtrière",
    isPro: true,
    totalReviews: 48,
    perHour: 27,
    starsAverage: 4.7,
    qualities: ["Finition parfaite", "Efficace", "Très recommandée"],
    isVerified: true,
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
    stepComponent: NbHours,
    stepIndex: 1,
    stepLink: "nb-hours",
  },
  {
    stepId: "KPL421Z",
    stepComponent: NbJobbers,
    stepIndex: 2,
    stepLink: "nb-jobbers",
    category: "Assemblage de meubles",
    title: "De combien de prestataires avez-vous besoin ?",
  },
  {
    stepId: "PQM265U",
    stepComponent: DateJobs,
    stepIndex: 3,
    stepLink: "date",
    category: "Assemblage de meubles",
    title: "Quel jour vous convient le mieux ?",
  },
  {
    stepId: "PQM731V",
    stepComponent: StartHour,
    stepIndex: 4,
    stepLink: "start-hour",
    category: "Assemblage de meubles",
    title: "Quelle heure vous convient le mieux ?",
  },
  {
    stepId: "PQM103G",
    stepComponent: Adress,
    stepIndex: 5,
    stepLink: "address",
    category: "Assemblage de meubles",
    title: "Quelle est l'adresse de la prestation ?",
  },
  {
    stepId: "PQM70LA",
    stepComponent: Phone,
    stepIndex: 6,
    stepLink: "phone",
    category: "Assemblage de meubles",
    title: "Sur quel numéro de téléphone pouvons-nous vous joindre ?",
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

export const adresses: SearchAdress[] = [
  //Les rues pour le departement de Dakar
  {
    id: 1,
    rue: "A.S.M. Parsine",
  },
  {
    id: 2,
    rue: "Allée des flamboyants",
  },
  {
    id: 3,
    rue: "Allée des hibiscus",
  },
  {
    id: 4,
    rue: "Allée des Jasmins",
  },
  {
    id: 5,
    rue: "Allée jardin",
  },
  {
    id: 6,
    rue: "Allée jardin 2",
  },
  {
    id: 7,
    rue: "Allée Léon Delmas",
  },
  {
    id: 8,
    rue: "Allée Seydina Limoulaye",
  },
  {
    id: 9,
    rue: "Allées Cheikhna Cheikh Sidaty Aîdara",
  },
  {
    id: 10,
    rue: "Allées Delmas",
  },
  {
    id: 11,
    rue: "Allées Papa Gueye Fall",
  },
  {
    id: 12,
    rue: "Allées T.S. Nourou Sall (AAB 01)",
  },
  {
    id: 13,
    rue: "Allées T.S. Nourou Sall (AAB-01)",
  },
  {
    id: 14,
    rue: "Ancienne Piste",
  },
  {
    id: 15,
    rue: "Autoroute Seydina-Limamoulaye",
  },
  {
    id: 16,
    rue: "Avenue Abdoulaye Fadiga",
  },
  {
    id: 17,
    rue: "Avenue Amadou Cissé Dia",
  },
  {
    id: 18,
    rue: "Avenue Ballay",
  },
  {
    id: 19,
    rue: "Avenue Birago Diop (PE-27)",
  },
  {
    id: 20,
    rue: "Avenue Blaise Diagne",
  },
  {
    id: 21,
    rue: "Avenue Carde",
  },
  {
    id: 22,
    rue: "Avenue Cheick Anta Diop",
  },
  {
    id: 23,
    rue: "Avenue Cheikh Ahmadou Bamba",
  },
  {
    id: 24,
    rue: "Avenue Cheikh Ahmadou Bamba Mbacké ( Rue HLM-17)",
  },
  {
    id: 25,
    rue: "Avenue Cheikh Amadou Bamba Mbaké",
  },
  {
    id: 26,
    rue: "Avenue Cheikh Anta Diop",
  },
  {
    id: 27,
    rue: "Avenue Cheikh Seydi El Hadji Malick Sy",
  },
  {
    id: 28,
    rue: "Avenue Corniche (HLM-137)",
  },
  {
    id: 29,
    rue: "Avenue de la République",
  },
  {
    id: 30,
    rue: "Avenue des Ambassadeurs",
  },
  {
    id: 31,
    rue: "Avenue des Jambars",
  },
  {
    id: 32,
    rue: "Avenue du Président Habib Bourguiba",
  },
  {
    id: 33,
    rue: "Avenue du Président Lamine Gueye",
  },
  {
    id: 34,
    rue: "Avenue du Président Léopold Sedar Senghor",
  },
  {
    id: 35,
    rue: "Avenue du Roi Fahd Ben Abdel Aziz",
  },
  {
    id: 36,
    rue: "Avenue du Sénégal",
  },
  {
    id: 37,
    rue: "Avenue E. Badiane",
  },
  {
    id: 38,
    rue: "Avenue Faidherbe",
  },
  {
    id: 39,
    rue: "Avenue Félix Eboué",
  },
  {
    id: 40,
    rue: "Avenue Franklin D. Roosevelt",
  },
  {
    id: 41,
    rue: "Avenue George Pompidou",
  },
  {
    id: 42,
    rue: "Avenue Habib Bourguiba",
  },
  {
    id: 43,
    rue: "Avenue Hassan 2",
  },
  {
    id: 44,
    rue: "Avenue Jean Jaurès",
  },
  {
    id: 45,
    rue: "Avenue Jean XXIII",
  },
  {
    id: 46,
    rue: "Avenue Malick Sy",
  },
  {
    id: 47,
    rue: "Avenue Nelson Mandela",
  },
  {
    id: 48,
    rue: "Avenue Pasteur",
  },
  {
    id: 49,
    rue: "Avenue Petersen",
  },
  {
    id: 50,
    rue: "Avenue Peytavin",
  },
  {
    id: 51,
    rue: "Avenue Seydina Limamoulaye",
  },
  {
    id: 52,
    rue: "Boulevard Canal 4",
  },
  {
    id: 53,
    rue: "Boulevard de la Libération",
  },
  {
    id: 54,
    rue: "Boulevard Dial Diop",
  },
  {
    id: 55,
    rue: "Boulevard du Centenaire de la Commune de Dakar",
  },
  {
    id: 56,
    rue: "Boulevard du Docteur Samba Guéye",
  },
  {
    id: 57,
    rue: "Boulevard du Général de Gaulle",
  },
  {
    id: 58,
    rue: "Boulevard du Koweit (SC-01)",
  },
  {
    id: 59,
    rue: "Boulevard du Président Habib Bourguiba",
  },
  {
    id: 60,
    rue: "Boulevard El Hadj Djily Mbaye",
  },
  {
    id: 61,
    rue: "Boulevard Gueule Tapée",
  },
  {
    id: 62,
    rue: "Bretelle derrière Nabil Choucar",
  },
  {
    id: 63,
    rue: "CA-221",
  },
  {
    id: 64,
    rue: "Carrefour des Civilisations",
  },
  {
    id: 65,
    rue: "Carrefour du Cerf Volant",
  },
  {
    id: 66,
    rue: "Case bi- Eglise",
  },
  {
    id: 67,
    rue: "Case-ba",
  },
  {
    id: 68,
    rue: "cheikh anta diop",
  },
  {
    id: 69,
    rue: "CO-40",
  },
  {
    id: 70,
    rue: "Corniche des Almadies",
  },
  {
    id: 71,
    rue: "FASS impass rue22 PR-01",
  },
  {
    id: 72,
    rue: "Fass Passerelle",
  },
  {
    id: 73,
    rue: "Hann Maristes HB-242",
  },
  {
    id: 74,
    rue: "Hann Maristes HB-321",
  },
  {
    id: 75,
    rue: "Impasse des Cordias",
  },
  {
    id: 76,
    rue: "Kognou Serigne Saliou Thioune",
  },
  {
    id: 77,
    rue: "La Corniche Nabil Choucair",
  },
  {
    id: 78,
    rue: "DF-72",
  },
  {
    id: 79,
    rue: "Ecole Supérieur d'Informatique Appliquée",
  },
  {
    id: 80,
    rue: "FASS impass rue22 PR-01Fass PasserelleFass Rue FA-24fq",
  },
  {
    id: 81,
    rue: "Hann Maristes HB-242",
  },
  {
    id: 82,
    rue: "Hann Maristes HB-321",
  },
  {
    id: 83,
    rue: "HB - 218",
  },
  {
    id: 84,
    rue: "HB 426",
  },
  {
    id: 85,
    rue: "HB-394",
  },
  {
    id: 86,
    rue: "Impasse des Cordias",
  },
  {
    id: 87,
    rue: "Impasse des Filaos",
  },
  {
    id: 88,
    rue: "Kognou Serigne Saliou Thioune",
  },
  {
    id: 89,
    rue: "La Corniche Nabil Choucair",
  },
  {
    id: 90,
    rue: "La Corniche Patte d'Oie Builders",
  },
  {
    id: 91,
    rue: "LIB-19",
  },
  {
    id: 92,
    rue: "LIB-23",
  },
  {
    id: 93,
    rue: "LIB-24",
  },
  {
    id: 94,
    rue: "LIB-25",
  },
  {
    id: 95,
    rue: "LIB-27",
  },
  {
    id: 96,
    rue: "LIB-28",
  },
  {
    id: 97,
    rue: "LIB-32",
  },
  {
    id: 98,
    rue: "LIB-36",
  },
  {
    id: 99,
    rue: "LIB-38",
  },
  {
    id: 100,
    rue: "LIB-40",
  },
  {
    id: 101,
    rue: "Medima rue 22",
  },
  {
    id: 102,
    rue: "MZ-126",
  },
  {
    id: 103,
    rue: "MZ-139",
  },
  {
    id: 104,
    rue: "MZ-141",
  },
  {
    id: 105,
    rue: "MZ-154",
  },
  {
    id: 106,
    rue: "MZ-164",
  },
  {
    id: 107,
    rue: "MZ-165",
  },
  {
    id: 108,
    rue: "MZ-172",
  },
  {
    id: 109,
    rue: "MZ-200",
  },
  {
    id: 110,
    rue: "MZ-230",
  },
  {
    id: 111,
    rue: "MZ-234",
  },
  {
    id: 112,
    rue: "MZ-83",
  },
  {
    id: 113,
    rue: "Nations-Unies",
  },
  {
    id: 114,
    rue: "OKM-1",
  },
  {
    id: 115,
    rue: "OKM-21",
  },
  {
    id: 116,
    rue: "Parcelles Unite 16",
  },
  {
    id: 117,
    rue: "Parcour sportif du parc",
  },
  {
    id: 118,
    rue: "PL-114",
  },
  {
    id: 119,
    rue: "Place des Tirailleurs",
  },
  {
    id: 120,
    rue: "Place du Général Leclerc",
  },
  {
    id: 121,
    rue: "Place Sowéto",
  },
  {
    id: 122,
    rue: "Place Washington",
  },
  {
    id: 123,
    rue: "Pont de Cambérène",
  },
  {
    id: 124,
    rue: "Rocade Fann Bel Air",
  },
  {
    id: 125,
    rue: "Rocade Fann Bel-Air",
  },
  {
    id: 126,
    rue: "Rond-point Colobane",
  },
  {
    id: 127,
    rue: "Rond-Point d'Espagne",
  },
  {
    id: 128,
    rue: "Rond-point de l'OIT",
  },
  {
    id: 129,
    rue: "Rond-Point de l'Œuf",
  },
  {
    id: 130,
    rue: "Rond-Point Liberté 6",
  },
  {
    id: 131,
    rue: "Roukhou bou sèw",
  },
  {
    id: 132,
    rue: "Route de Colobane",
  },
  {
    id: 133,
    rue: "Route de Fann",
  },
  {
    id: 134,
    rue: "Route de King Fahd",
  },
  {
    id: 135,
    rue: "Route de l'Aéroport",
  },
  {
    id: 136,
    rue: "Route de l'ORT SEN de Hann",
  },
  {
    id: 137,
    rue: "Route de la Corniche Est",
  },
  {
    id: 138,
    rue: "Route de la Corniche O Dakar",
  },
  {
    id: 139,
    rue: "Route de la Corniche Ouest",
  },
  {
    id: 140,
    rue: "Route de la Mosquée de Ngor",
  },
  {
    id: 141,
    rue: "Route de Ngor",
  },
  {
    id: 142,
    rue: "Route de Niayes",
  },
  {
    id: 143,
    rue: "Route de Rufisque",
  },
  {
    id: 144,
    rue: "Route des Brasseries (HB-212)",
  },
  {
    id: 145,
    rue: "Route des Grands Moulins",
  },
  {
    id: 146,
    rue: "Route des Hydrocarbures",
  },
  {
    id: 147,
    rue: "Route des Niayes",
  },
  {
    id: 148,
    rue: "Route des pères Maristes",
  },
  {
    id: 149,
    rue: "Route du C.V.D.",
  },
  {
    id: 150,
    rue: "Route du Front de Terre",
  },
  {
    id: 151,
    rue: "Route du Service Géographique",
  },
  {
    id: 152,
    rue: "GD 24",
  },
  {
    id: 153,
    rue: "Rue (AAB-27)",
  },
  {
    id: 154,
    rue: "Rue (AAB-29)",
  },
  {
    id: 155,
    rue: "Rue (AAB-31)",
  },
  {
    id: 156,
    rue: "Rue (AAB-33)",
  },
  {
    id: 157,
    rue: "Rue PA11-30",
  },
  {
    id: 158,
    rue: "Rue PA11-38",
  },
  {
    id: 159,
    rue: "Rue PA11-40",
  },
  {
    id: 160,
    rue: "Rue PA11-47",
  },
  {
    id: 161,
    rue: "Rue PA11-49",
  },
  {
    id: 162,
    rue: "Rue PA11-51",
  },
  {
    id: 163,
    rue: "Rue PA11-55",
  },
  {
    id: 164,
    rue: "Rue PA11-93",
  },
  {
    id: 165,
    rue: "Rue Parchappe",
  },
  {
    id: 166,
    rue: "Rue Parent",
  },
  {
    id: 167,
    rue: "Rue Paul Holle",
  },
  {
    id: 168,
    rue: "Rue PE-40",
  },
  {
    id: 169,
    rue: "Rue PE-45",
  },
  {
    id: 170,
    rue: "Rue PE-46",
  },
  {
    id: 171,
    rue: "Rue PE-47",
  },
  {
    id: 172,
    rue: "Rue PE-48",
  },
  {
    id: 173,
    rue: "Rue PE-50",
  },
  {
    id: 174,
    rue: "Rue PE-52",
  },
  {
    id: 175,
    rue: "Rue Pierre Martin",
  },
  {
    id: 176,
    rue: "Rue PL-109",
  },
  {
    id: 177,
    rue: "Rue PL-115",
  },
  {
    id: 178,
    rue: "Rue PL-121",
  },
  {
    id: 179,
    rue: "Rue PL-144",
  },
  {
    id: 180,
    rue: "Rue PL-156",
  },
  {
    id: 181,
    rue: "Rue PL-40",
  },
  {
    id: 182,
    rue: "Rue PL-74",
  },
  {
    id: 183,
    rue: "Rue PL-75",
  },
  {
    id: 184,
    rue: "Rue Raffenel",
  },
  {
    id: 185,
    rue: "Rue Ramez Bourgi",
  },
  {
    id: 186,
    rue: "Rue René Caillé",
  },
  {
    id: 187,
    rue: "Rue René Ndiaye",
  },
  {
    id: 188,
    rue: "Rue RIPP (BIS-67)",
  },
  {
    id: 189,
    rue: "Rue Robert Brun",
  },
  {
    id: 190,
    rue: "Rue S. Malamine",
  },
  {
    id: 191,
    rue: "Rue Saint Michel",
  },
  {
    id: 192,
    rue: "Rue Saint-Charles",
  },
  {
    id: 193,
    rue: "Rue Saint-Germain",
  },
  {
    id: 194,
    rue: "Rue Salva",
  },
  {
    id: 195,
    rue: "Rue Samo (FN-12)",
  },
  {
    id: 196,
    rue: "Rue Sanfoune NIANG (BIS-41)",
  },
  {
    id: 197,
    rue: "Rue Sérigne Fallou Mbacké (BIS-45)",
  },
  {
    id: 198,
    rue: "Rue SC-157",
  },
  {
    id: 199,
    rue: "Rue SC-164",
  },
  {
    id: 200,
    rue: "Rue SC-184",
  },
  {
    id: 201,
    rue: "Rue Serigne Fallou Mbacké (BIS-17)",
  },
  {
    id: 202,
    rue: "Rue Serigne Ousmane Mbacké Noreiny",
  },
  {
    id: 203,
    rue: "Rue St John Perse (FN-28)",
  },
  {
    id: 204,
    rue: "Rue St Joseph",
  },
  {
    id: 205,
    rue: "Rue Valmy",
  },
  {
    id: 206,
    rue: "Rue Victor Hugo",
  },
  {
    id: 207,
    rue: "Rue Vincens",
  },
  {
    id: 208,
    rue: "Rue Wagane Diouf",
  },
  {
    id: 209,
    rue: "Rue YF 260",
  },
  {
    id: 210,
    rue: "Rue YF 41",
  },
  {
    id: 211,
    rue: "Rue YF-08",
  },
  {
    id: 212,
    rue: "Rue YF-12",
  },
  {
    id: 213,
    rue: "Rue YF-18",
  },
  {
    id: 214,
    rue: "Rue YF-194",
  },
  {
    id: 215,
    rue: "Rue YF-26",
  },
  {
    id: 216,
    rue: "Rue YF-28",
  },
  {
    id: 217,
    rue: "Rue YF-525",
  },
  {
    id: 218,
    rue: "Rue YF-527",
  },
  {
    id: 219,
    rue: "Rue YF-529",
  },
  {
    id: 220,
    rue: "Rue YF-531",
  },
  {
    id: 221,
    rue: "Rue YF105",
  },
  {
    id: 222,
    rue: "Rue YF109",
  },
  {
    id: 223,
    rue: "Rue YF458",
  },
  {
    id: 224,
    rue: "Rue-23",
  },
  {
    id: 225,
    rue: "Rue-9",
  },
  {
    id: 226,
    rue: "Rue-B",
  },
  {
    id: 227,
    rue: "Rue-Biscuiterie",
  },
  {
    id: 228,
    rue: "ruelle gueule tapée",
  },
  {
    id: 229,
    rue: "Sacré-Cœur 1",
  },
  {
    id: 230,
    rue: "Saltigué Baida Mbengue",
  },
  {
    id: 231,
    rue: "SC-105",
  },
  {
    id: 232,
    rue: "SC-154",
  },
  {
    id: 233,
    rue: "SC-172",
  },
  {
    id: 234,
    rue: "SC-41",
  },
  {
    id: 235,
    rue: "SC-65",
  },
  {
    id: 236,
    rue: "SC-77",
  },
  {
    id: 237,
    rue: "SC-78",
  },
  {
    id: 238,
    rue: "SC-86",
  },
  {
    id: 239,
    rue: "SC-94",
  },
  {
    id: 240,
    rue: "Talli Bou Bess",
  },
  {
    id: 241,
    rue: "Voie de Dégagement Nord",
  },
  {
    id: 242,
    rue: "Yonou Marché Bou Mak",
  },
  {
    id: 243,
    rue: "Yonou Mobile",
  },

  //Les rues pour le departement de Rufisque
];

export const words: string[] = [
  "Peindre une chambre",
  "Néttoyer une maison",
  "Monter un meuble",
  "Décoration de maison",
  "Ménage",
  "Plomberie",
  "Décoration de chambre",
  "déménager",
  "Faire une livraison",
  "Maçonnerie",
  "Repasser des chemises",
  "Cours d'informatique",
];

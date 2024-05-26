import { FlipWords } from "./ui/flip-words";

export function TextFlip() {
  const words = [
    {
      id: "hgtdfu",
      word: "Plomberie",
      color: "#ea580c",
    },
    {
      id: "hgtkml",
      word: "Ménage",
      color: "#4f46e5",
    },
    {
      id: "pmwdfu",
      word: "Jardinerie",
      color: "#16a34a",
    },
    {
      id: "fqnmpa",
      word: "Électricité",
      color: "#7c3aed",
    },
    {
      id: "kvympa",
      word: "Peinture",
      color: "#c026d3",
    },
    {
      id: "dzlpmq",
      word: "Décoration",
      color: "#0891b2",
    },
  ];

  return (
    <div className="h-[8rem] flex justify-center items-center px-4">
      <div className="text-5xl mx-auto font-ibm-plex-serif text-neutral-800 dark:text-neutral-400 text-stroke leading-[55px]">
        Votre
        <FlipWords words={words} /> <br /> rendue facile.
      </div>
    </div>
  );
}

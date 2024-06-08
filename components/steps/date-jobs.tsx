import React from "react";
import { Calendar } from "../ui/calendar";
import { fr } from "date-fns/locale";

const DateJobs = ({ category, title }: { category: string; title: string }) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const currentMonth = date?.getMonth()
    ? date?.getMonth()
    : new Date().getMonth();
  const currentYear = date?.getFullYear()
    ? date?.getFullYear()
    : new Date().getFullYear();

  return (
    <div className="flex flex-col items-center max-h-[600px] overflow-y-auto w-full max-w-2xl py-8">
      <div className="flex flex-col items-start mb-4">
        <p className="text-gray-800 font-semibold">{category}</p>
        <p className="text-3xl font-bold max-w-md">{title}</p>
      </div>
      <div className="flex items-center gap-6 mr-16">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded"
          locale={fr}
          fromMonth={new Date(currentYear, currentMonth)}
        />
      </div>
    </div>
  );
};

export default DateJobs;

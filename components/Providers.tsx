import CardProvider from "./CardProvider";
import { jobber } from "@/lib/data";

const Providers = () => {
  return (
    <div className="flex flex-col gap-4 my-10 items-center justify-center mx-auto w-full max-w-5xl">
      <h2 className="flex w-full max-w-2xl text-3xl text-center font-bold text-gray-800">
        12 000 prestataires de service à domicile évalués et qualifiés
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {
            jobber.map((jobs) => <CardProvider key={jobs.id} item={jobs} />)
        }
       
      </div>
    </div>
  );
};

export default Providers;

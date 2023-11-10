import React from "react";

import { Navbar } from "../../components/atm.navbar";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="bg-custom-image h-[600px] lg:h-[1000px]">
      <Navbar />

      <div className="flex flex-row justify-center my-20">
        <div className="w-32 h-32 m-10 border-2 shadow-md px-8 flex items-center justify-around gap-4 text-white hover:bg-violet-900">
          <Link to={"/personagens"}>Personagens</Link>
        </div>
        <div className="w-32 h-32 m-10 border-2 shadow-md px-8 flex items-center justify-around gap-4 text-white hover:bg-blue-900">
          <Link to={"/episodios"}>Episodios</Link>
        </div>
      </div>
    </div>
  );
};

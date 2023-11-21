import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar } from '../../components/atm.navbar';

export const HomePage = () => {
  return (
    <div className='bg-custom-image h-[600px] lg:h-[1000px]'>
      <Navbar />

      <div className="flex flex-row justify-center mt-44 gap-5">
        
        <div className="rounded-full w-60 h-24 border-2 shadow-lg flex items-center justify-around gap-4 text-black bg-cyan-200">
          <Link to={"/personagens"}>Personagens</Link>
        </div>

        <div className='rounded-full w-60 h-24 border-2 shadow-lg flex items-center justify-around gap-4 text-black bg-cyan-200'>
          <Link to={'/episodios'}>Episodios</Link>
        </div>
      </div>
    </div>
  );
};

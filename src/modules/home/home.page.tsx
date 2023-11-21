import React from 'react';

import { Link } from 'react-router-dom';
import { Navbar } from '../../components/atm.navbar';

export const HomePage = () => {
  return (
    <div className='bg-custom-image h-[600px] lg:h-[1000px]'>
      <Navbar />

      <div className='mt-44 flex flex-row justify-center gap-5'>
        <div className='flex h-24 w-60 items-center justify-around gap-4 rounded-full border-2 bg-cyan-200 text-black shadow-lg'>
          <Link to={'/personagens'}>Personagens</Link>
        </div>

        <div className='flex h-24 w-60 items-center justify-around gap-4 rounded-full border-2 bg-cyan-200 text-black shadow-lg'>
          <Link to={'/episodios'}>Episodios</Link>
        </div>
      </div>
    </div>
  );
};

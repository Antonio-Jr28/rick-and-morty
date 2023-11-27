import React from 'react';

import { Link } from 'react-router-dom';
import { heroString } from './hero.string';

export const Hero = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-5'>
      <div className='mt-24 md:mt-64' />

      <div className='flex w-[140px] items-center justify-around gap-4 rounded-full border-2 border-white bg-transparent text-white shadow-lg hover:bg-slate-200 md:h-24 md:w-60'>
        <Link to={'/personagens'}>{heroString.selectButton.characters}</Link>
      </div>

      <div className='flex w-[140px] items-center justify-around gap-4 rounded-full border-2 border-white bg-transparent text-white shadow-lg  hover:bg-slate-200 md:h-24 md:w-60'>
        <Link to={'/episodios'}>{heroString.selectButton.episodes}</Link>
      </div>
    </div>
  );
};

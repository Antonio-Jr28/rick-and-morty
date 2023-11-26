import React from 'react';

import { Link } from 'react-router-dom';
import { heroString } from './hero.string';

export const Hero = () => {
  return (
    <div className='mt-44 flex flex-row justify-center gap-5'>
      <div className='flex h-24 w-60 items-center justify-around gap-4 rounded-full border-2 bg-cyan-200 text-black shadow-lg'>
        <Link to={'/personagens'}>{heroString.selectButton.characters}</Link>
      </div>

      <div className='flex h-24 w-60 items-center justify-around gap-4 rounded-full border-2 bg-cyan-200 text-black shadow-lg'>
        <Link to={'/episodios'}>{heroString.selectButton.episodes}</Link>
      </div>
    </div>
  );
};

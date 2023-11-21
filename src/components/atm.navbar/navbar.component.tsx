import React from 'react';

import { navbarString } from './navbar.string';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const IMAGE_WIDTH = '20%';
  return (
    <nav className='sticky top-0 m-auto flex h-32 w-full items-center justify-around gap-4 bg-violet-900 px-8 shadow-md'>
      <img alt={navbarString.altImage} width={IMAGE_WIDTH} src={navbarString.srcImageLogo} />

      <div className='flex items-center gap-20 text-2xl text-white'>
        <Link to='/'>{navbarString.home}</Link>
        <Link to='/personagens'>{navbarString.personagens}</Link>
        <Link to='/episodios'>{navbarString.episodio}</Link>
      </div>
    </nav>
  );
};

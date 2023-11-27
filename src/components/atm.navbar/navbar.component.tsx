import React from 'react';

import { navbarString } from './navbar.string';
import { NavbarDesktop } from './navbar-desktop';
import { NavbarMobile } from './navbar-mobile';

export const Navbar = () => {
  const menuItems = [
    { label: 'home', link: '/' },
    { label: 'personagens', link: '/personagens' },
    { label: 'episodios', link: '/episodios' },
  ];

  const IMAGE_WIDTH = '20%';
  return (
    <nav className='flex h-20 items-center justify-around gap-4 bg-violet-900 px-8 shadow-xl'>
      <img alt={navbarString.altImage} width={IMAGE_WIDTH} src={navbarString.srcImageLogo} />

      <NavbarMobile menuItems={menuItems} />
      <NavbarDesktop menuItems={menuItems} />
    </nav>
  );
};

import React from 'react';

import { navbarString } from './navbar.string';
import { NavbarDesktop } from './navbar-desktop';
import { NavbarMobile } from './navbar-mobile';

export const Navbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const menuItems = [
    { label: 'home', link: '/' },
    { label: 'personagens', link: '/personagens' },
    { label: 'episodios', link: '/episodios' },
  ];

  const IMAGE_WIDTH = '20%';
  return (
    <nav className='sticky top-0 m-auto flex h-32 w-full items-center justify-around gap-4 bg-violet-900 px-8 shadow-md'>
      <img alt={navbarString.altImage} width={IMAGE_WIDTH} src={navbarString.srcImageLogo} />

      <NavbarMobile menuItems={menuItems}/>
      <NavbarDesktop menuItems={menuItems} />
    </nav>
  );
};

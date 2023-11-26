import React from 'react';

interface NavbarDesktopProps {
  menuItems: { label: string, link: string }[];
}

export const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ menuItems }) => {
  return (
    <div className='hidden items-center justify-around gap-10 md:flex'>
      {menuItems.map((item, index) => (
        <a key={index} className='text-white hover:text-green-600' href={item.link}>
          {item.label}
        </a>
      ))}
    </div>
  );
};

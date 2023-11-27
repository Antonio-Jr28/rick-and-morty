import React, { useState, useEffect, useRef } from 'react';

interface NavbarMobileProps {
  menuItems: { label: string, link: string }[];
}

export const NavbarMobile: React.FC<NavbarMobileProps> = ({ menuItems }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    console.log('Toggling menu');
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains?.(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='cursor-pointer md:hidden' ref={menuRef}>
      <svg
        className='h-6 w-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        onClick={toggleMenu}>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
      </svg>

      {isMenuOpen && (
        <div className='absolute inset-x-0 top-16 z-10 rounded-md border bg-white shadow-md'>
          <ul className='flex flex-col items-center gap-4 p-4 md:flex-row md:items-center'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a className='text-gray-500 hover:text-black' href={item.link} onClick={toggleMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

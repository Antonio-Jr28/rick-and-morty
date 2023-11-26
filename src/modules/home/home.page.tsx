import React from 'react';

import { Navbar } from '../../components/atm.navbar';
import { Hero } from '../../components/mol.hero/hero-components';

export const HomePage = () => {
  return (
    <div className='bg-custom-image h-[600px] lg:h-[1000px]'>
      <Navbar />

      <Hero />
    </div>
  );
};

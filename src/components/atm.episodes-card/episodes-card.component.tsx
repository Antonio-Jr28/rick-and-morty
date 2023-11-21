import React from 'react';

export const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='border-4 bg-indigo-300 border-emerald-300 shadow-lg shadow-black px-8 py-8 rounded-3xl inline-block'>
      {children}
    </div>
  );
};

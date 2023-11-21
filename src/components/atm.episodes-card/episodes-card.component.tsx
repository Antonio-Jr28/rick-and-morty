import React from 'react';

export const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='inline-block rounded-3xl border-4 border-emerald-300 bg-indigo-300 p-8 shadow-lg shadow-black'>
      {children}
    </div>
  );
};

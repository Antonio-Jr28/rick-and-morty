import React from 'react';

export const CardWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='inline-block rounded-3xl border-4 border-emerald-300 bg-gradient-to-r from-sky-500 to-indigo-500 p-8 shadow-lg hover:shadow-indigo-700'>
      {children}
    </div>
  );
};

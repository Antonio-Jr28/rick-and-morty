import React from "react";

export const CardWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="border-4 border-emerald-300 shadow-md px-8 py-8 rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-500 inline-block">
      {children}
    </div>
  );
};

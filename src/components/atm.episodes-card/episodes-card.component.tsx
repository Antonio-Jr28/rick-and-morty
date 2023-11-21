import React from "react";

interface EpisodesCardProps {
  isExpanded: boolean;
  onToggleExpansion?: () => void; 
}

export const EpisodesCard: React.FC<EpisodesCardProps & React.PropsWithChildren<{}>> = ({
  children,
  isExpanded,
  onToggleExpansion,
}) => {
  return (
    <div
      className={`border-4 bg-indigo-300 border-emerald-300 shadow-lg shadow-black px-8 py-8 rounded-3xl inline-block ${
        isExpanded ? "hover:shadow-violet-600" : ""
      }`}
    >
      {children}
    </div>
  );
};

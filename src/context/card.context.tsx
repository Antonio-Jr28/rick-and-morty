import React from "react";

export interface Card {
  img: string;
  name: string;
}

const CardContext = React.createContext<{ card: Card } | null>(null);

export const useCardContext = () => {
  const context = React.useContext(CardContext);
  if (!context) {
    throw new Error("CardContext must bu used inside Card");
  }
  return context;
};

import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  onClick: () => void | undefined; // Sem parênteses extras
  text: string;
}

export const Button: React.FC<CustomButtonProps> = ({
  loading,
  onClick,
  text,
  ...rest
}) => {
  return (
    <button {...rest} onClick={onClick}>
      {loading ? "Carregando..." : text}
    </button>
  );
};

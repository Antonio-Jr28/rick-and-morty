import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  onClick: () => void;
}

export const Button: React.FC<CustomButtonProps> = ({
  loading,
  onClick,
  ...rest
}) => {
  return (
    <button {...rest} onClick={onClick}>
      {loading ? "Carregando..." : "Clique em mim"}
    </button>
  );
};

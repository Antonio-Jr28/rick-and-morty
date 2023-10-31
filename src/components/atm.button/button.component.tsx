import React from "react";
import { Buttonstyled } from "./button.style";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  onClick: () => void | undefined;
  text: string;
}

export const Button: React.FC<CustomButtonProps> = ({
  loading,
  onClick,
  text,
  ...rest
}) => {
  return (
    <Buttonstyled {...rest} onClick={onClick}>
      {loading ? "Carregando..." : text}
    </Buttonstyled>
  );
};

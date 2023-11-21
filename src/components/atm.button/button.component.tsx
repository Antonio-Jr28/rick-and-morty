import React from "react";
import { ButtonStyled, VariantTypes } from "./button.style";
import { BaseColor } from "../obj.connstant/constant.modal";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  onClick?: () => void | undefined;
  text: string;
  color?: BaseColor | string;
  variant?: VariantTypes;
}

export const Button: React.FC<CustomButtonProps> = ({
  loading,
  onClick,
  text,
  color,
  variant = "primary",
  ...rest
}) => {
  return (
    <ButtonStyled
      color={color}
      variant={variant}
      {...rest}
      onClick={onClick}
    >
      {loading ? "Carregando..." : text}
    </ButtonStyled>
  );
};

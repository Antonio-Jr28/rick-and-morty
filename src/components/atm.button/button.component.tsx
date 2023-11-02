import React from "react";
import { ButtonStyled} from "./button.style";
import { BaseColor } from "../obj.connstant/constant.modal";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  onClick: () => void | undefined;
  text: string;
  color?: BaseColor | string;
}

export const Button: React.FC<CustomButtonProps> = ({
  loading,
  onClick,
  text,
  color,
  ...rest
}) => {
  return (
    <ButtonStyled color={color} {...rest} onClick={onClick}>
      {loading ? "Carregando..." : text}
    </ButtonStyled>
  );
};

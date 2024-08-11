import React from "react";
import { ButtonProps } from "../../types/button";
import { StyledButtonWithIconWrapper } from "./styles";

interface ButtonWithIconProps extends ButtonProps {
  icon?: React.ReactNode;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  icon,
  label,
  ...props
}) => {
  return (
    <StyledButtonWithIconWrapper {...props}>
      {icon}
      {label}
    </StyledButtonWithIconWrapper>
  );
};

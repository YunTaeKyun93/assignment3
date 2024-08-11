import React from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "../../types/button";

/**
 * Button 컴포넌트
 * 이 컴포넌트는 크기, 테마, 라벨, 변형 등 커스터마이징 가능한 버튼을 렌더링합니다.
 * styled-components를 사용하여 스타일링합니다.
 *
 * @param {ButtonProps} props - Button 컴포넌트에 전달되는 속성들 (라벨, 클릭 핸들러, 테마 등)
 */

export const Button: React.FC<ButtonProps> = ({
  onClick,
  size = "medium",
  color = "primary",
  label,
  variant = "default",
}) => {
  return (
    <StyledButton onClick={onClick} size={size} color={color} variant={variant}>
      {label}
    </StyledButton>
  );
};

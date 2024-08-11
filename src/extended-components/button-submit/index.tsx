import React from "react";
import { ButtonProps } from "../../types/button";
import { StyledButton } from "../../common-components/button/styles";

/**
 * SubmitButton 컴포넌트
 * 이 컴포넌트는 크기, 테마, 라벨, 변형 등 커스터마이징 가능한 버튼을 렌더링합니다.(기존 버튼과 같지만, type이 submit, reset전용입니다.)
 * styled-components를 사용하여 스타일링합니다.
 *
 * @param type - 'submit'|'reset'
 * @param {ButtonProps} props - Button 컴포넌트에 전달되는 속성들 (라벨, 클릭 핸들러, 테마 등)
 * @returns {JSX.Element} 렌더링된 버튼 컴포넌트.
 */

interface SubmitButtonProps extends ButtonProps {
  type?: "submit" | "reset";
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  size = "medium",
  variant = "default",
  label,
  color = "primary",
  type = "submit",
}) => {
  return (
    <StyledButton
      onClick={onClick}
      size={size}
      color={color}
      variant={variant}
      type={type}
    >
      {label}
    </StyledButton>
  );
};

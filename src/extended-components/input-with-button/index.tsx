import React from "react";
import { InputWithButtonProps } from "../../types/input";
import * as Comps from "../../common-components/index";
import {
  StyledButtonWrapper,
  StyledInputWithButton,
  StyledInputWithButtonWrapper,
} from "./styles";

/**
 * InputWithButton 컴포넌트는 입력 필드(Input)와 버튼(Button)을 합쳐서 하나의 컴포넌트로 제공합니다.
 * 사용자가 입력 필드를 통해 텍스트를 입력하고, 버튼을 클릭하여 특정 작업을 수행할 수 있습니다.
 *
 * @param size - Input, Button의 사이즈를 공통으로 관리하려고 합니다.
 * @param {InputProps} - Input 컴포넌트에 전달되는 속성들 (사이즈, 검증 로직, 변경 핸들러 등)
 * @param {ButtonProps} - Button 컴포넌트에 전달되는 속성들 (라벨, 클릭 핸들러, 테마 등)
 * @param {InputWithButtonProps} - 해당 타입을 확인 할 경우 참조 해주세요.
 * @returns 입력 필드와 버튼이 함께 있는 컴포넌트를 렌더링합니다.
 */

export const InputWithButton: React.FC<InputWithButtonProps> = ({
  size = "medium",
  inputProps,
  buttonProps,
}) => {
  const { onChangeText, variant, ...restInputProps } = inputProps;
  const {
    color = "primary",
    label,
    variant: buttonVariant = "default",
    onClick,
  } = buttonProps;

  return (
    <StyledInputWithButtonWrapper>
      <StyledInputWithButton
        inputSize={size}
        variant={variant}
        onChange={(e) => {
          if (onChangeText) {
            onChangeText(e.target.value);
          }
        }}
        {...restInputProps}
      />
      <StyledButtonWrapper>
        <Comps.Button
          label={label}
          size={size}
          onClick={onClick}
          color={color}
          variant={buttonVariant}
        />
      </StyledButtonWrapper>
    </StyledInputWithButtonWrapper>
  );
};

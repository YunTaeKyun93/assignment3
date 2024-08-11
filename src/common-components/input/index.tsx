import React from "react";
import { StyledInput } from "./styles";
import { InputProps } from "../../types/input";

/**
 * Input
 *
 * @param {InputProps} 기본적인 input에 사용하는 props를 사용할 수 있고,
 *  추가로 사용할 수 있는 props inputSize, variant, onChangeText가 있습니다.
 */

export const Input: React.FC<InputProps> = ({
  inputSize = "medium",
  variant = "primary",
  onChangeText,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (onChangeText) {
      onChangeText(value);
    }
  };

  return (
    <StyledInput
      inputSize={inputSize}
      variant={variant}
      onChange={handleChange}
      {...props}
    />
  );
};

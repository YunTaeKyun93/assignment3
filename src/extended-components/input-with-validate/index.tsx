// src/components/Input/Input.tsx
import React, { useState } from 'react';
import { StyledInputWithValidate } from './styles';
import { InputWithValidateProps } from '../../types/input';
import * as Coms from '../../common-components';
/**
 * Input 컴포넌트는 여러 개의 유효성 검사 함수를 지원합니다.
 * 각 검증 함수는 배열로 전달되며, 모든 검증을 통과해야 합니다.
 *
 * @param {InputProps} 기본적인 input에 사용하는 props를 사용할 수 있고,
 *  추가로 사용할 수 있는 props inputSize, variant, validate, onChangeText가 있습니다.
 *  - validate: 여러 유효성 검사 함수를 배열로 받을 수 있습니다.
 */

export const InputWithValidate: React.FC<InputWithValidateProps> = ({
  inputSize = 'medium',
  variant = 'primary',
  validate = [],
  onChangeText,
  ...props
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    for (let validator of validate) {
      const validationError = validator(value);
      console.log(validationError);
      if (validationError) {
        setError(validationError);
        return;
      }
    }

    setError(null);

    if (onChangeText) {
      onChangeText(value);
    }
  };

  return (
    <>
      <StyledInputWithValidate
        inputSize={inputSize}
        variant={variant}
        onChange={handleChange}
        {...props}
      />
      {error && <Coms.HelperText text={error ?? ''} />}
    </>
  );
};

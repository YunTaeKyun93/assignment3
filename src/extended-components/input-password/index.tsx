import React, { useState } from 'react';
import { InputWithValidateProps } from '../../types/input';
import { StyledInputPassword } from './styles';
import { HelperText } from '../../common-components/helper-text';

/**
 * Input 컴포넌트는 여러 개의 유효성 검사 함수를 지원합니다.
 * 각 검증 함수는 배열로 전달되며, 모든 검증을 통과해야 합니다.
 * 패스워드 전용 입니다.
 */

interface InputPasswordProps extends InputWithValidateProps {
  confirmValidate?: (value: string, password: string) => string | null;
  password?: string;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
  inputSize = 'medium',
  variant = 'primary',
  validate = [],
  onChangeText,
  confirmValidate,
  password = '',
  ...props
}) => {
  const [error, setError] = useState<string | null>(null);
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const validationError = validate.reduce<string | null>(
      (error, validator) => error || validator(value),
      null,
    );

    if (confirmValidate && password !== undefined) {
      const result = confirmValidate(value, password);
      console.log(result);
      if (result) {
        setError(result);
        return;
      }
    }

    setError(validationError);

    if (onChangeText) {
      onChangeText(value);
    }
  };

  return (
    <>
      <StyledInputPassword
        type="password"
        inputSize={inputSize}
        variant={variant}
        value={value}
        onChange={handleChange}
        {...props}
      />
      {error && <HelperText text={error ?? ''} />}
    </>
  );
};

import React, { useState } from 'react';
import { InputWithValidateProps } from '../../types/input';
import { StyledInputPhone } from './styles';
import { HelperText } from '../../common-components/helper-text';
import FormatPhoneNumber from '../../util/format-phone-number';
import { phoneNumberValidate } from '../../validate/phone-number';

/**
 * Input 컴포넌트는 여러 개의 유효성 검사 함수를 지원합니다.
 * 각 검증 함수는 배열로 전달되며, 모든 검증을 통과해야 합니다.
 * 렌더링 되는 텍스트가 휴대폰 번호 형식으로 렌더링 됩니다.
 */

interface InputPhoneProps extends InputWithValidateProps {}

export const InputPhone: React.FC<InputPhoneProps> = ({
  inputSize = 'medium',
  variant = 'primary',
  validate = [phoneNumberValidate],
  onChangeText,
  ...props
}) => {
  const [error, setError] = useState<string | null>(null);
  const [formattedValue, setFormattedValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const unformattedValue = value.replace(/\D/g, '');

    const limitedValue = unformattedValue.slice(0, 11);
    const formatted = FormatPhoneNumber(limitedValue);

    setFormattedValue(formatted);

    if (onChangeText) {
      onChangeText(limitedValue);
    }

    // Validate 입력값
    const validationError = validate.reduce<string | null>(
      (error, validator) => {
        return error || validator(limitedValue);
      },
      null,
    );

    setError(validationError);
  };

  return (
    <>
      <StyledInputPhone
        type="text"
        inputSize={inputSize}
        variant={variant}
        value={formattedValue}
        onChange={handleChange}
        {...props}
      />
      {error && <HelperText text={error ?? ''} />}
    </>
  );
};

import { ButtonProps } from './button';

export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'primary' | 'secondary' | 'error' | 'black';

/**
 * InputProps 인터페이스는 Input 컴포넌트에 전달되는 속성들을 정의합니다.
 * - inputSize: Input의 크기를 정의합니다.
 * - variant: Input의 스타일링을 위한 variant를 정의합니다.
 * - onChangeText: Input의 값이 변경될 때 호출되는 콜백 함수입니다.
 */

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  variant?: InputVariant;
  onChangeText?: (value: string) => void;
}

/**
 * InputProps 인터페이스는 Input 컴포넌트에 전달되는 속성들을 정의합니다.
 * - inputSize: Input의 크기를 정의합니다.
 * - variant: Input의 스타일링을 위한 variant를 정의합니다.
 * - onChangeText: Input의 값이 변경될 때 호출되는 콜백 함수입니다.
 *  - validate: 여러 유효성 검사 함수를 배열로 받을 수 있습니다.
 */

export interface InputWithValidateProps extends InputProps {
  validate?: Array<(value: string) => string | null>;
  ref?: React.RefObject<HTMLInputElement>;
}

/**
 * InputWithButtonProps 인터페이스는 Input과 Button이 결합된 컴포넌트에 전달되는 속성들을 정의합니다.
 * - inputProps: Input 컴포넌트에 전달되는 속성들을 포함합니다.
 * - buttonProps: Button 컴포넌트에 전달되는 속성들을 포함합니다.
 */

export interface InputWithButtonProps {
  size?: InputSize;
  inputProps: InputWithValidateProps;
  buttonProps: ButtonProps;
}

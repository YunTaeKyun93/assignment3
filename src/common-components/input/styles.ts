// src/components/Input/styles.ts
import styled, { css } from 'styled-components';
import { InputSize, InputVariant } from '../../types/input';
import { theme } from '../../styles/theme';

const inputSizeStyles: Record<InputSize, ReturnType<typeof css>> = {
  small: css`
    padding: 5px 10px;
    font-size: 12px;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: 14px;
  `,
  large: css`
    padding: 15px 30px;
    font-size: 16px;
  `,
};

const inputVariantStyles: Record<InputVariant, ReturnType<typeof css>> = {
  primary: css`
    border: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};
    &:focus {
      border-color: ${theme.colors.primary};
    }
  `,
  secondary: css`
    border: 1px solid ${theme.colors.secondary};
    background-color: ${theme.colors.secondaryLight};
    color: ${theme.colors.secondary};
    &:focus {
      border-color: ${theme.colors.secondary};
    }
  `,
  error: css`
    border: 1px solid ${theme.colors.error};
    background-color: ${theme.colors.errorLight};
    color: ${theme.colors.error};
    &:focus {
      border-color: ${theme.colors.error};
    }
  `,
  black: css`
    border: 1px solid ${theme.colors.black};
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    &:focus {
      border-color: ${theme.colors.black};
    }
  `,
};

export const StyledInput = styled.input<{
  inputSize: InputSize;
  variant?: InputVariant;
}>`
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  ${(props) => props.inputSize && inputSizeStyles[props.inputSize]};
  ${(props) => props.variant && inputVariantStyles[props.variant]};

  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
  }
`;

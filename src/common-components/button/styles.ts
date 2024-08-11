// src/components/Button/styles/buttonStyles.ts
import styled, { css } from 'styled-components';
import { ButtonSize, ButtonColor, ButtonVariant } from '../../types/button';
import { theme } from '../../styles/theme';

export const buttonSizeStyles: Record<ButtonSize, ReturnType<typeof css>> = {
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
  fulled: css`
    width: 100%;
    padding: 12px;
    font-size: 20px;
  `,
};

export const buttonVariantStyles: Record<
  ButtonVariant,
  ReturnType<typeof css>
> = {
  default: css`
    background-color: ${theme.colors.defaultBackground};
    color: white;
    border: none;
    &:hover {
      opacity: 0.1;
    }
  `,
  outline: css`
    background-color: ${theme.colors.outlineBackground};
    color: ${theme.colors.outlineColor};
    border: 2px solid ${theme.colors.outlineColor};
    &:hover {
      background-color: ${theme.colors.outlineHover};
    }
  `,
};

export const buttonColorStyles: Record<ButtonColor, ReturnType<typeof css>> = {
  primary: css`
    background-color: ${theme.colors.primary};
    color: white;
    border: none;
    &:hover {
      opacity: 0.8;
    }
  `,
  secondary: css`
    background-color: ${theme.colors.secondary};
    color: white;
    border: none;
    &:hover {
      opacity: 0.8;
    }
  `,
  error: css`
    background-color: ${theme.colors.error};
    color: white;
    border: none;
    &:hover {
      opacity: 0.8;
    }
  `,
};

interface StyledButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  ${(props) => props.size && buttonSizeStyles[props.size]};
  ${(props) => props.variant && buttonVariantStyles[props.variant]};
  ${(props) => props.color && buttonColorStyles[props.color]};
  transition: all 0.3s ease;

  &:hover {
    ${(props) =>
      props.color
        ? buttonColorStyles[props.color]
        : props.variant
          ? buttonVariantStyles[props.variant]
          : css`
              opacity: 0.8;
            `}
  }
`;

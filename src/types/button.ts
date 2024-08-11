export type ButtonSize = "small" | "medium" | "large" | "fulled";
export type ButtonVariant = "default" | "outline";
export type ButtonColor = "primary" | "secondary" | "error";

export interface ButtonProps {
  onClick?: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  label: string;
  variant?: ButtonVariant;
}

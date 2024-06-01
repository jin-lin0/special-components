import { StyledButton } from "./Button.style";

export interface ButtonProps {
  type?: 'primary' | 'transparent'
  /**
   * Cover Type's BackgroundColor 
   */
  backgroundColor?: string;
  color?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  hoverOpacity?: number;
}

export const Button = ({
  type = 'primary',
  size = 'medium',
  backgroundColor,
  color,
  label,
  hoverOpacity = 0.8,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      size={size}
      backgroundColor={backgroundColor}
      color={color}
      hoverOpacity={hoverOpacity}
      label={label}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

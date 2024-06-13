import StyledButton from "./Button.style";

export interface ButtonProps {
  type?: "primary" | "transparent" | "link";
  /**
   * Text
   */
  label: string;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  hoverOpacity?: number;
  disabledOpacity?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button = ({
  type = "primary",
  size = "medium",
  backgroundColor,
  color,
  label,
  hoverOpacity = 0.8,
  disabledOpacity = 0.5,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      size={size}
      style={{ backgroundColor, color }}
      hoverOpacity={hoverOpacity}
      disabledOpacity={disabledOpacity}
      label={label}
      disabled={disabled}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

export default Button;

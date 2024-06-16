import StyledButton from "./Button.style";

interface CustomButtonProps {
  type?: "primary" | "transparent" | "link";
  label: string;
  backgroundColor?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  hoverOpacity?: number;
  disabled?: boolean;
  disabledOpacity?: number;
}

type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "type"
>;
type NativeAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = CustomButtonProps &
  (NativeButtonProps | NativeAnchorProps);

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

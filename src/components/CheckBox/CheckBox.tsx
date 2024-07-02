import {
  StyledCheckBoxContainer,
  StyledCheckBoxInput,
  StyledCheckBoxLabel,
} from "./CheckBox.style";

export interface CheckBoxProps {
  defaultChecked?: boolean;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({
  label,
  checked,
  defaultChecked,
  disabled,
  className,
  onChange,
}: CheckBoxProps) => {
  return (
    <StyledCheckBoxContainer disabled={disabled} className={className}>
      <StyledCheckBoxInput
        type="checkbox"
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledCheckBoxLabel>{label}</StyledCheckBoxLabel>
    </StyledCheckBoxContainer>
  );
};

export default CheckBox;

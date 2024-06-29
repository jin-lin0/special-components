import React from "react";
import StyledInput from "./Input.style";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string;
  disabled?: boolean;
}

const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;

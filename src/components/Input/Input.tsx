import React, { useEffect, useRef, useState } from "react";
import StyledInput, {
  PrefixIconWrapper,
  StyledInputWrapper,
} from "./Input.style";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
}

const Input = ({ prefixIcon, onChange, value, ...props }: InputProps) => {
  const [isComposing, setIsComposing] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value || "";
    }
  }, [value]);

  const handleCompositionStart = () => {
    setIsComposing(true);
  };

  const handleCompositionEnd = (
    event: React.CompositionEvent<HTMLInputElement>
  ) => {
    setIsComposing(false);
    if (onChange) {
      onChange(event as any);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isComposing && onChange) {
      onChange(event);
    }
  };

  return (
    <StyledInputWrapper>
      {prefixIcon && <PrefixIconWrapper>{prefixIcon}</PrefixIconWrapper>}
      <StyledInput
        ref={inputRef}
        prefixIcon={prefixIcon}
        onChange={handleChange}
        onCompositionStart={handleCompositionStart}
        onCompositionEnd={handleCompositionEnd}
        {...props}
      />
    </StyledInputWrapper>
  );
};

export default Input;

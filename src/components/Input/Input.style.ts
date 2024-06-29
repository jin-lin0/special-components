import { InputProps } from "./Input";
import styled, { css } from "styled-components";

export const StyledInput = styled.input<InputProps>`
  ${(props) => css`
    box-sizing: border-box;
    position: relative;
    background-color: #f8fafc;
    border: 1px solid ${props.theme.colors.inputBorder};
    border-radius: 6px;
    font-size: 14px;
    height: 32px;
    outline: none;
    padding: 6px 10px;

    &:hover {
      border-color: ${props.theme.colors.primary};
    }

    &:focus {
      border-color: ${props.theme.colors.primary};
      box-shadow:
        #fff 0 0 0 0,
        ${props.theme.colors.inputFocus} 0 0 0 2px,
        rgba(0, 0, 0, 0.05) 0 1px 2px 0;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      color: transparent;
      text-shadow: 0 0 0 #000;
      box-shadow: none;
      border-color: ${props.theme.colors.inputBorder};
    }
  `}
`;

export default StyledInput;

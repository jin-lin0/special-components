import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

const sizes = {
  small: "padding: 8px 16px; font-size: 12px;",
  medium: "padding: 12px 24px; font-size: 14px;",
  large: "padding: 16px 32px; font-size: 16px;",
};

const types = {
  primary: "",
  transparent:
    "background-color: transparent; color: #333; border: 1px solid #ccc; ",
};

export const StyledButton = styled.button<ButtonProps>`
  ${(props) => css`
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    line-height: 1;
    background-color: ${props.backgroundColor || props.theme.colors.primary};
    color: ${props.color || props.theme.colors.text};
    ${types[props.type || "primary"]}
    ${sizes[props.size || "medium"]}
  &:hover {
      opacity: ${props.hoverOpacity || 0.8}; // 使用 hoverOpacity 属性控制透明度
    }
  `}
`;

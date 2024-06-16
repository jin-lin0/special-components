import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

const sizes = {
  small: css`
    padding: 8px 16px;
    font-size: 12px;
  `,
  medium: css`
    padding: 12px 24px;
    font-size: 14px;
  `,
  large: css`
    padding: 16px 32px;
    font-size: 16px;
  `,
};

const types = {
  primary: css`
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  `,
  transparent: css`
    background-color: transparent;
    color: #333;
    border: 1px solid #ccc;
  `,
  link: css`
    border: none;
    color: ${(props) => props.theme.colors.primary};
    background: initial;
    text-decoration: none;
    &:hover {
      text-decoration-line: underline;
      text-underline-offset: 4px;
    }
  `,
};

const StyledButton = styled.button.attrs<ButtonProps>((props) => ({
  as: props.type == "link" ? "a" : "button",
}))`
  ${(props) => css`
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    line-height: 1;

    ${props.type && types[props.type]}
    ${props.size && sizes[props.size]}

    &:hover {
      opacity: ${props.hoverOpacity}; // 使用 hoverOpacity 属性控制透明度
    }

    &:disabled {
      cursor: not-allowed;
      opacity: ${props.disabledOpacity};
      box-shadow: none;
      > * {
        pointer-events: none;
      }
    }
  `}
`;

export default StyledButton;

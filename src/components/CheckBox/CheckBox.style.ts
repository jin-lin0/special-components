import { CheckBoxProps } from "./CheckBox";
import styled, { css } from "styled-components";

const disabledStyle = css`
  opacity: 0.5;
  cursor: not-allowed;
`;

export const StyledCheckBoxContainer = styled.label<CheckBoxProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  ${(props) => props.disabled && disabledStyle}
`;

export const StyledCheckBoxInput = styled.input`
  margin-right: 8px;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledCheckBoxLabel = styled.span`
  font-size: 14px;
`;

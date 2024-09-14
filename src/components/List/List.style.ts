import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledItem = styled.div`
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
`;

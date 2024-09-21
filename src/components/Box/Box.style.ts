import styled, { keyframes } from "styled-components";
import { BoxProps } from "./Box";

const StyledBox = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  gap: ${({ gap }) => gap || "0"};
  border: ${({ border }) => border || "none"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  transition: all 0.2s ease-in-out;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;

const loading = keyframes`
    from {
      background-position: 200% 0; 
    }
    to {
      background-position: -200% 0;
    }
`;

export const StyledSkeletonBox = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  animation: ${loading} 1.5s infinite;
`;

export default StyledBox;

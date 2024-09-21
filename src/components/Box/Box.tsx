import { useMemo } from "react";
import StyledBox, { StyledSkeletonBox } from "./Box.style";

export interface CustomBoxProps {
  direction?: "row" | "column";
  wrap?: boolean;
  gap?: string;
  width?: string;
  height?: string;
  border?: string;
  background?: string;
  skeleton?: boolean;
  onClick?: () => void;
}

export type BoxProps = CustomBoxProps & React.HTMLAttributes<HTMLDivElement>;

const Box = ({
  direction = "column",
  wrap = false,
  gap,
  width,
  height,
  border,
  background,
  skeleton = false,
  onClick,
  children,
  ...props
}: BoxProps) => {
  const content = useMemo(
    () => (skeleton ? <StyledSkeletonBox /> : children),
    [skeleton, children]
  );

  return (
    <StyledBox
      background={background}
      border={border}
      gap={gap}
      direction={direction}
      wrap={wrap}
      width={width}
      height={height}
      onClick={onClick}
      {...props}
    >
      {content}
    </StyledBox>
  );
};

export default Box;

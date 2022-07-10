import React from "react";
import "./index.less";

export interface ButtonProps {
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 按钮文字颜色
   */
  color?: string;
  children?: React.ReactNode;
  fontSize?: number;
}

const Button = ({
  children,
  backgroundColor = "#C850C0",
  color = "#fff",
  fontSize = 14,
}: ButtonProps) => {
  return (
    <div
      className="spComponents-button"
      style={{ backgroundColor: backgroundColor, color, fontSize }}
    >
      {children}
    </div>
  );
};

export default Button;

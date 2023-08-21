import classNames from "classnames";
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
  /**
   * 字体大小
   */
  fontSize?: number;
  /**
   * 子节点
   */
  children?: React.ReactNode;

  onClick?: () => void;
}

const Button = ({
  children,
  backgroundColor = "#C850C0",
  color = "#fff",
  fontSize = 14,
  onClick,
}: ButtonProps) => {
  return (
    <div
      className={classNames(["spComponents-button", "aaa"])}
      style={{ backgroundColor: backgroundColor, color, fontSize }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;

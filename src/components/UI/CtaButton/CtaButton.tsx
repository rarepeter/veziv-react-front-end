import React, { ReactNode } from "react";
import styles from "./CtaButton.module.css";

interface CtaButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    React.AriaAttributes {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  brightTheme?: boolean;
}

export default function CtaButton({
  onClick,
  className = "",
  children,
  brightTheme = false,
  ...restProps
}: CtaButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.button} ${brightTheme ? styles.bright : ""}`}
      {...restProps}
    >
      {children}
    </button>
  );
}

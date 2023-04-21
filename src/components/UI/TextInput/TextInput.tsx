import React, { InputHTMLAttributes } from "react";
import styles from "./TextInput.module.css";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  className?: string;
  name: string;
  value: string;
}

export default function TextInput({
  labelText = "",
  className = "",
  name,
  value,
  ...restProps
}: IInput) {
  return (
    <div className={`${styles["input-wrapper"]} ${className}`}>
      {labelText !== "" ? <label htmlFor={name}>{labelText}</label> : null}
      <input type="text" id={name} name={name} className={className} value={value} {...restProps} />
    </div>
  );
}

import React from "react";
import styles from "./TextInput.module.css";

interface IInput {
  labelText: string;
  className?: string;
  name: string;
  value: string;
  onValueChange: (input: string) => void;
}

export default function TextInput({
  labelText = "",
  className = "",
  name,
  onValueChange,
  value,
  ...restProps
}: IInput) {
  return (
    <div className={`${styles["input-wrapper"]} ${className}`}>
      {labelText !== "" ? <label htmlFor={name}>{labelText}</label> : null}
      <input
        type="text"
        id={name}
        name={name}
        className={className}
        onChange={(e) => onValueChange(e.target.value)}
        value={value}
      />
    </div>
  );
}

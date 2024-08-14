import { FC } from "react";
import { ListBoxButtonProps } from "./Button.types";
import styles from './Button.module.css'

const Button: FC<ListBoxButtonProps> = ({ label, ...htmlButtonProps }) => {
  return <button className={styles.btn} {...htmlButtonProps}>{label}</button>;
};

export default Button;

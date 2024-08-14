import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export type ListBoxButtonProps = {label: string} &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
import { ReactNode } from "react";

export default interface CheckboxProps {
  label?: ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

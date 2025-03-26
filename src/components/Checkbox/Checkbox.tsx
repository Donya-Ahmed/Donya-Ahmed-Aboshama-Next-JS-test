import CheckboxProps from "@/Types/Interfaces/CheckboxProps";
import React, { ReactNode } from "react";


export default function Checkbox ({ label, checked, onChange, disabled }:CheckboxProps)  {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        className="w-5 h-5 accent-blue-500 cursor-pointer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {label && label}
    </label>
  );
};


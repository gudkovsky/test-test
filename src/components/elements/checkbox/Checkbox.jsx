import React from "react";
import { Label, HiddenInput, CheckSpan } from "./styles.jsx";

export default function Checkbox({children, checked, onChange, value}) {

  return (
    <Label>
      <HiddenInput
        type="checkbox"
        value={value}
        checked={checked}
        name="checkbox"
        onChange={onChange}
      ></HiddenInput>
      <CheckSpan />
      {value}
    </Label>
  );
}
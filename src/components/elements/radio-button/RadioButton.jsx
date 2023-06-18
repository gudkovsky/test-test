import React from "react";
import { Label, HiddenInput, RadioSpan } from "./styles.jsx";

export default function RadioButton({ checked, onChange, value}) {

  return (
    <Label>
      <HiddenInput
        type="radio"
        value={value}
        checked={checked}
        name="radio"
        onChange={onChange}
      ></HiddenInput>
      <RadioSpan />
      {value}
    </Label>
  );
}
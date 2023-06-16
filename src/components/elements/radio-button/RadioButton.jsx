import React from "react";
import { Label, HiddenInput, RadioSpan } from "./styles.jsx";

export default function RadioButton({children}) {

  return (
    <Label>
      <HiddenInput
        type="checkbox"
        value={children}
      ></HiddenInput>
      <RadioSpan />
      {children}
    </Label>
  );
}
import React from "react";
import { Label, HiddenInput, CheckSpan } from "./styles.jsx";

export default function Checkbox({children}) {

  return (
    <Label>
      <HiddenInput
        type="checkbox"
        value={children}
      ></HiddenInput>
      <CheckSpan />
      {children}
    </Label>
  );
}
import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
`;

const Checkmark = styled.div`
  border-radius: 100%;
  border: 4px solid #fff;
  background: ${props =>
    props.checked
      ? props.theme.colors.radioButton
      : props.theme.colors.radioButtonNone};
  height: 15px;
  width: 15px;
  margin-right: 15px;
`;

const RadioInput = ({ checked, label, ...inputProps }) => {
  return (
    <Label>
      <Input type="radio" checked={checked} {...inputProps} />
      <Checkmark checked={checked} />
      {label}
    </Label>
  );
};

export default RadioInput;

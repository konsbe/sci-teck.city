import React from "react";
import { TextField } from "@mui/material";
import { style } from "@mui/system";

const styles = () => ({
  multilineColor: {
    color: "red",
  },
});

const InputForm = ({ ...otherProps }) => {
  return (
    <div>
      <TextField {...otherProps} />
    </div>
  );
};

export default InputForm;

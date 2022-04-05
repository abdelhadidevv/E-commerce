import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => <TextField fullWidth label={label} required />}
        name={name}
        control={control}
        label={label}
        fullWidth
        error={isError}
        defaultValue=""
      />
    </Grid>
  );
};

export default FormInput;

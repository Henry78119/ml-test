import { InputAdornment } from "@material-ui/core";
import React from "react";
import { TextFieldStyled } from "./MLTextField.styled";

interface IProps {
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  helperText?: string;
  errorText?: string;
  error?: boolean;
  select?: boolean;
  SelectProps?: any;
  margin?: boolean;
  InputLabelProps?: any;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  inputProps?: any;
  className?: string;
  endIcon?: any;
  startIcon?: any;
  onChange?: any;
  onKeyDown?: any;
  value?: any;
  multiline?: boolean;
  rows?: number;
  minRows?: number;
  readOnly?: boolean;
}

const MLTextField: React.FC<IProps> = ({
  label,
  required = false,
  margin = false,
  disabled = false,
  maxLength,
  minLength,
  error = false,
  helperText = "",
  errorText = "",
  className,
  endIcon = null,
  startIcon = null,
  readOnly = false,
  inputProps = {},
  ...props
}) => {
  return (
    <TextFieldStyled
      label={
        <>
          {required && <span className="required-icon">* </span>}
          {label}
        </>
      }
      className={className}
      fullWidth={true}
      variant="filled"
      margin={margin ? "dense" : "dense"}
      size="small"
      disabled={disabled}
      error={error}
      helperText={error ? errorText : helperText}
      inputProps={{
        maxLength,
        minLength,
        autoComplete: "off",
        readOnly,
        ...inputProps,
      }}
      InputProps={{
        endAdornment: endIcon ? (
          <InputAdornment position="end">{endIcon}</InputAdornment>
        ) : null,
        startAdornment: startIcon ? (
          <InputAdornment position="end">{startIcon}</InputAdornment>
        ) : null,
      }}
      value={props.value}
      {...props}
    />
  );
};

export default MLTextField;

import React from "react";
import { InputAdornment } from "@material-ui/core";
import { SearchFieldStyled } from "./MLSearchField.styled";
import magnifyingGlassIcon from "../../assets/ic_Search@2x.png.png.png";

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
  disabled?: boolean;
  inputProps?: any;
  className?: string;
  endIcon?: any;
  onChange?: any;
  value?: any;
}

const MLSearchField: React.FC<IProps> = ({
  label = "Search",
  required = false,
  margin = false,
  disabled = false,
  maxLength,
  error = false,
  helperText = "",
  errorText = "",
  className,
  endIcon = null,
  ...props
}) => {
  return (
    <SearchFieldStyled
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
        autoComplete: "new-password",
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {endIcon ? (
              endIcon
            ) : (
              <img src={magnifyingGlassIcon} alt="search-icon" />
            )}
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default React.memo(MLSearchField);

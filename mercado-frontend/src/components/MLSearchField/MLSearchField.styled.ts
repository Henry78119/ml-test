import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { commonStyles } from "../Common.styled";

interface IStyledFieldProps {
  error?: boolean;
}

export const SearchFieldStyled = styled(TextField)<IStyledFieldProps>`
  ${commonStyles}
  & .MuiInputBase-root {
    flex-direction: row-reverse;
    height: 4.6rem;
    ƒ & .MuiInputAdornment-root {
      padding-left: 5px;
    }
  }

  & label {
    color: var(--grey-2);
    margin-left: 31px;
    font-size: 1.6rem;
    font-weight: 300;
  }

  &img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

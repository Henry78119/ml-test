import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { commonStyles } from "../Common.styled";
interface IStyledFieldProps {
  error?: boolean;
}

export const TextFieldStyled = styled(TextField)<IStyledFieldProps>`
  ${commonStyles}
  background-color: white;
  & label {
    color: #a0a0a0;
    font-weight: 500;
  }
`;

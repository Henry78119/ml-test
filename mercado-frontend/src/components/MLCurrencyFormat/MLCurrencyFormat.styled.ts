import styled from "styled-components";
import NumberFormat from "react-number-format";
import { commonStyles } from "../Common.styled";
interface IStyledFieldProps {
  error?: boolean;
}

export const CurrencyFormatStyled = styled(NumberFormat)<IStyledFieldProps>`
  ${commonStyles}
`;

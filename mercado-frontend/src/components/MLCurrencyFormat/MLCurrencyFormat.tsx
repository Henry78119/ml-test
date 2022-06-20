import React from "react";
import { CurrencyFormatStyled } from "./MLCurrencyFormat.styled";

interface IProps {
  value?: string;
  prefix?: string;
  decimalSeparator?: string;
  thousandSeparator?: any;
  allowNegative?: boolean;
  format?: string;
  renderText?: any;
  isNumericString?: boolean;
  className?: string;
}

const MLCurrencyFormat: React.FC<IProps> = ({
  value,
  prefix,
  decimalSeparator,
  thousandSeparator,
  allowNegative,
  format,
  isNumericString = true,
  className,
  ...props
}) => {
  return (
    <CurrencyFormatStyled
      value={value}
      displayType="text"
      isNumericString={isNumericString}
      prefix={prefix || "$"}
      decimalScale={0}
      fixedDecimalScale={true}
      className={className}
      decimalSeparator={decimalSeparator || ","}
      thousandSeparator={thousandSeparator || "."}
      {...props}
    />
  );
};

export default MLCurrencyFormat;

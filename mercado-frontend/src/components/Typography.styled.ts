import styled, { css } from "styled-components";

const commonStyles = css`
  font-family: inherit;
  overflow-wrap: break-word;
  line-height: 1.2;

  &.xxxs {
    font-size: 0.8rem;
  }

  &.xxs {
    font-size: 1.2rem;
  }

  &.xs {
    font-size: 1.2rem;
  }

  &.sm1 {
    font-size: 1.5rem;
  }

  &.sm {
    font-size: 1.4rem;
  }

  &.md {
    font-size: 1.6rem;
  }

  &.md2 {
    font-size: 1.7rem;
  }

  &.lg {
    font-size: 1.8rem;
  }

  &.xl {
    font-size: 2rem;
  }

  &.xxl {
    font-size: 2.4rem;
  }

  &.xxl1 {
    font-size: 2.8rem;
  }

  &.xxl2 {
    font-size: 3.5rem;
  }

  &.xxl3 {
    font-size: 4rem;
  }

  &.lightest {
    font-weight: 100;
  }

  &.light {
    font-weight: 300;
  }

  &.normal {
    font-weight: 400;
  }

  &.medium {
    font-weight: 500;
  }

  &.bold {
    font-weight: 600;
  }

  &.bolder {
    font-weight: 700;
  }

  &.green {
    color: green;
  }

  &.red {
    color: red;
  }

  &.grey {
    color: var(--grey-2);
  }

  &.text-center {
    text-align: center;
  }

  &.text-end {
    text-align: end;
  }

  &.uppercase {
    text-transform: uppercase;
  }

  &.lowercase {
    text-transform: lowercase;
  }

  &.capitalize {
    text-transform: capitalize;
  }

  &.pointer {
    cursor: pointer;
  }

  &.no-padding {
    padding: 0;
  }

  &.no-margin {
    margin: 0;
  }

  &.my-0 {
    margin-top: 0;
    margin-bottom: 0;
  }

  &.mt-0 {
    margin-top: 0;
  }

  &.mb-0 {
    margin-bottom: 0;
  }

  &.block {
    display: block;
  }

  &.padding-right-1 {
    padding-right: 1rem;
  }

  &.padding-left-1 {
    padding-left: 1rem;
  }
`;

export const MLText = styled.div`
  color: black;
  font-weight: 400;
  font-size: 1.6rem;
  ${commonStyles}
`;

export const MLSpan = styled.span`
  color: #eeeeee;
  font-weight: 400;
  font-size: 1.6rem;
  ${commonStyles}
`;

export const MLLabel = styled.label`
  color: #eeeeee;
  font-weight: 400;
  font-size: 1.6rem;
  ${commonStyles}
`;

export const MLLink = styled.a`
  color: black;
  font-weight: 400;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover,
  &:active {
    text-decoration: underline;
  }
  ${commonStyles}
`;

export const MLParagraph = styled.p`
  color: #eeeeee;
  font-weight: 400;
  font-size: 1.6rem;

  ${commonStyles}

  &.black {
    color: #000000;
  }
`;

export const MLH1 = styled.h1`
  color: var(--ml-grey);
  font-weight: 700;
  font-size: 3.5rem;
  margin: 1.6rem 0;
  ${commonStyles}
`;

export const MLH2 = styled.h2`
  color: var(--ml-grey);
  font-weight: 700;
  font-size: 2.8rem;
  margin: 1.6rem 0;
  ${commonStyles}
`;

export const MLH3 = styled.h3`
  color: var(--ml-grey);
  font-weight: 700;
  font-size: 2.4rem;
  margin: 0.8rem 0;
  ${commonStyles}
`;

export const MLH4 = styled.h4`
  color: var(--ml-grey);
  font-weight: 700;
  font-size: 2rem;
  margin: 0.8rem 0;
  ${commonStyles}
`;

export const MLH5 = styled.h5`
  color: var(--ml-grey);
  font-weight: 700;
  font-size: 3.5rem;
  ${commonStyles}
`;

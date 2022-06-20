import styled from "styled-components";

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--ml-yellow);
`;

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5px;
  padding-top: 1px;
  &.plr-10 {
    padding-left: 10px;
    padding-right: 10px;
  }
  &.mr-15 {
    margin-right: 35px;
  }
`;

export const ComponentContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.w-500 {
    width: 50vw;
  }
  &.pointer {
    cursor: pointer;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--ml-grey);
  padding: 0.7rem;
  margin-top: 0.2rem;
  cursor: pointer;
`;

export const BreadcrumbLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--ml-grey-2);
`;

export const BreadcrumbItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-right: 10px;
  color: var(--ml-grey-2);
`;

export const BreadcrumbItemSeparator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-left: 1rem;
`;

export const ProductLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
`;

export const ProductItemRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  &.bg-white {
    background-color: white;
  }
`;

export const ProductItemColumn = styled.div`
  display: flex;
  flex-direction: column;

  &.bg-white {
    background-color: white;
  }
  &.bg-green {
    background-color: greenyellow;
  }
  &.bg-yellow {
    background-color: yellow;
  }
  &.w-50 {
    width: 50%;
  }
  &.w-25 {
    width: 25%;
  }
  &.w-75 {
    width: 75%;
  }
  &.p-1 {
    padding: 1rem;
  }
`;

export const ProductItemColumnContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  &.w-start {
    justify-content: start;
  }
`;

export const ProductItemColumnContent2 = styled.div`
  display: flex;
  flex-direction: column;
`;

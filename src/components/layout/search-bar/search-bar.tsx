import { Input } from "components/ui/input/input";
import React from "react";
import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <p>search bar</p>
      <Input />
    </SearchBarWrapper>
  );
};

export default SearchBar;

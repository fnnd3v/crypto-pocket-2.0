import React from "react";
import styled from "styled-components";
import Navigation from "components/layout/navigation/navigation";
import SearchBar from "../search-bar/search-bar";
import Section from "../section/section";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 150px 1fr 0.35fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow-y: hidden;
`;

const MainTemplate: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <Section />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;

import React from "react";

import Navigation from "components/layout/navigation/navigation";
import SearchBar from "../search-bar/search-bar";
import Section from "../section/section";
import NotesWidget from "../notes-widget/notes-widget";

import { Wrapper } from "./main-template.styles";

const MainTemplate: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <Section />
      {children}
      <NotesWidget />
    </Wrapper>
  );
};

export default MainTemplate;

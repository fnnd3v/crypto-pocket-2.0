import { Button } from "components/ui/button/button";
import React from "react";
import { NavLink, Routes } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 5;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

const SectionNavigation = () => {
  return (
    <Wrapper>
      <NavLink to="/dashboard">Favourites</NavLink>
      <NavLink to="/dashboard">Trending</NavLink>
      <NavLink to="/dashboard">Exchanges</NavLink>
      <NavLink to="/dashboard">Global</NavLink>
    </Wrapper>
  );
};

export default SectionNavigation;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

const Navigation = () => {
  return (
    <Wrapper>
      <NavLink to="/dashboard">dashboard</NavLink>
      <NavLink to="/pocket">pocket</NavLink>
      <NavLink to="/profile">profile</NavLink>
      <NavLink to="/settings">settings</NavLink>
    </Wrapper>
  );
};

export default Navigation;

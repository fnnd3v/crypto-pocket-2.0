import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  overflow-y: scroll;
`;

const Section = () => {
  return (
    <Wrapper>
      <p>section</p>
    </Wrapper>
  );
};

export default Section;

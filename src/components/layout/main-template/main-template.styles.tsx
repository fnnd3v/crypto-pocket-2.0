import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: scroll;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 90px 1fr 0.35fr;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow-y: hidden;
  position: relative;
`;

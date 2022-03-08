import styled from "styled-components";

export const ViewWrapper = styled.div`
  margin: auto;
  background-color: ${({ theme }) => theme.colors.white};
  width: 95%;
  height: 95%;
  max-width: 95%;
  max-height: 95%;
  overflow: hidden;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

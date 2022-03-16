import { Button } from "components/ui/button/button";
import styled from "styled-components";

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 5;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  ${Button} {
    height: 30px;
    margin: 0;
    flex-grow: 0.2;
  }
`;

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 90%;
  height: 90%;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.6);
`;

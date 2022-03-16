import styled from "styled-components";

import { Button } from "components/ui/button/button";
import { Title } from "components/ui/title/title";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

  align-items: center;
  height: 100%;
  ${Title} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
    width: 100%;
  }
`;
export const ButtonsWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  justify-content: space-around;

  ${Button} {
    flex-grow: 0.45;
    height: 40px;
  }
`;

export const SelectedCoinWrapper = styled.div`
  width: 90%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 10px 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;

  img {
    height: 100%;
    margin-right: 30px;
  }

  ${Title} {
    margin-right: 10px;
    font-size: 18px;
    border-bottom: none;
    width: auto;
  }
`;

export const SymbolP = styled.p`
  color: ${({ theme }) => theme.colors.darkPurple};
  margin: 0;
  padding: 0;
`;

export const FormWrapper = styled.form`
  padding-top: 20px;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${Button} {
    height: 50px;
  }
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  div {
    width: 45%;
    display: flex;
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  height: 70px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.darkGrey};

  span {
    font-weight: bold;
    font-size: 22px;
    margin-top: 4px;
  }
`;

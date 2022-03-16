import styled from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  padding: 10px 0;
  margin: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.darkGrey};

  img {
    height: 90%;
    margin-right: 10px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22%;
  text-align: left;
`;

export const CurrentPriceP = styled.p`
  width: 18%;
  text-align: right;
`;

export const Holding = styled.div`
  width: 21%;
  text-align: right;
`;

export const HoldingQuantityValueP = styled.p`
  font-weight: bold;
`;

export const HoldingQuantityP = styled.p`
  font-size: 16px;
`;

interface ProfitLossInterface {
  value: any;
}

export const ProfitLossP = styled.p<ProfitLossInterface>`
  width: 18%;
  height: 100%;
  text-align: right;
  display: flex;
  justify-content: flex-end;
  color: ${({ value, theme }) =>
    value > 0 ? theme.colors.success : theme.colors.error};
  align-items: center;
  font-weight: bold;
`;

export const ButtonsWrapper = styled.div`
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 150%;
  img {
    height: 45%;
  }
`;

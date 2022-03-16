import styled from "styled-components";

export const Wrapper = styled.li`
  width: 95%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  margin: 10px auto;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 16px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.5);
`;

export const TransactionTypeP = styled.p`
  width: 20%;
`;
export const PriceP = styled.p`
  width: 20%;
  text-align: right;
`;
export const QuantityP = styled.p`
  text-align: right;
  width: 20%;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;
`;

import { Title } from "components/ui/title/title";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 800px;
  height: 100%;
`;
const StatisticsWrapper = styled.div`
  width: 100%;
  height: 30%;
  background-color: red;
  display: flex;

  img {
    height: 40px;
  }
`;
const TransactionsWrapper = styled.ul`
  width: 100%;
  height: 70%;
`;

const TransactionModalWrapper: React.FC<any> = ({
  transaction,
  transaction: { id, img, name, symbol, currentPrice, transactions },
}) => {
  //quantity
  //avg buy price
  //transactions
  //current price

  console.log(transaction);

  return (
    <Wrapper>
      <StatisticsWrapper>
        <img src={img} alt="coin logo" />
        <Title> {name} </Title>
        <p> {currentPrice.toLocaleString()} </p>
        <div>
          <p>quantity</p>
          <p>avg but price</p>
          <p>total profit / loss</p>
        </div>
        <button>add transaction</button>
      </StatisticsWrapper>
      <TransactionsWrapper>
        {transactions.map((singleTransaction: any) => {
          return (
            <li key={singleTransaction.transactionID}>
              {singleTransaction.quantity}
            </li>
          );
        })}
      </TransactionsWrapper>
    </Wrapper>
  );
};

export default TransactionModalWrapper;

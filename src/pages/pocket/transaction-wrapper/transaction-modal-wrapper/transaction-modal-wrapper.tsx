import React from "react";

import { Title } from "components/ui/title/title";
import TransactionModalItem from "./transaction-modal-item/transaction-modal-item";

import {
  MapWrapper,
  StatisticsWrapper,
  TransactionsWrapper,
  Wrapper,
} from "./transaction-modal-wrapper.styles";

const TransactionModalWrapper: React.FC<any> = ({
  transaction,
  transaction: { id, img, name, symbol, currentPrice, transactions },
}) => {
  //quantity
  //avg buy price
  //transactions
  //current price

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
        <MapWrapper>
          <p>transaction type</p>
          <p>price</p>
          <p>amount</p>
          <p>buttons</p>
        </MapWrapper>
        {transactions.map((singleTransaction: any) => {
          return (
            <TransactionModalItem
              key={singleTransaction.transactionID}
              transaction={singleTransaction}
            />
          );
        })}
      </TransactionsWrapper>
    </Wrapper>
  );
};

export default TransactionModalWrapper;

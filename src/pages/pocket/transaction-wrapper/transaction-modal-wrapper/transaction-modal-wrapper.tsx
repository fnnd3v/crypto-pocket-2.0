import React from "react";

import { Title } from "components/ui/title/title";
import TransactionModalItem from "./transaction-modal-item/transaction-modal-item";

import {
  DetailsWrapper,
  InfoWrapper,
  MapWrapper,
  StatisticsWrapper,
  StyledBox,
  StyledLogo,
  TransactionsWrapper,
  Wrapper,
} from "./transaction-modal-wrapper.styles";
import styled from "styled-components";
import { Button } from "components/ui/button/button";

const TransactionModalWrapper: React.FC<any> = ({
  transaction,
  transaction: { id, img, name, symbol, currentPrice, transactions },
  totalHoldingQuantity,
  profitLoss,
  totalHoldingQuantityValue,
}) => {
  //quantity
  //avg buy price
  //transactions
  //current price

  return (
    <Wrapper>
      <StatisticsWrapper>
        <InfoWrapper>
          <StyledLogo src={img} alt="coin logo" />
          <Title> {name} </Title>
        </InfoWrapper>
        <DetailsWrapper>
          <StyledBox>
            <p>Current price</p>
            <span> {currentPrice.toLocaleString()} $</span>
          </StyledBox>
          <StyledBox>
            <p>Quantity</p>
            <span>{totalHoldingQuantity}</span>
          </StyledBox>
          <StyledBox>
            <p>Total value</p>
            <span>{totalHoldingQuantityValue.toLocaleString()} $</span>
          </StyledBox>
          <StyledBox>
            <p>Total profit/loss</p>
            <span>{profitLoss.toLocaleString()} $</span>
          </StyledBox>
        </DetailsWrapper>
        <Button>add transaction</Button>
      </StatisticsWrapper>
      <MapWrapper>
        <p>transaction type</p>
        <p>price</p>
        <p>amount</p>
      </MapWrapper>
      <TransactionsWrapper>
        {transactions.map((singleTransaction: any) => {
          return (
            <TransactionModalItem
              coin={transaction.id}
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

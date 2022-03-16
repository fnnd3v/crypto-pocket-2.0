import React from "react";

import {
  ButtonsWrapper,
  PriceP,
  QuantityP,
  TransactionTypeP,
  Wrapper,
} from "./transaction-modal-item.styles";

const TransactionModalItem: React.FC<any> = ({
  transaction: {
    transactionID,
    pricePerCoin,
    quantity,
    transactionBoughtValue,
    transactionType = "buy",
  },
}) => {
  return (
    <Wrapper>
      <TransactionTypeP>{transactionType}</TransactionTypeP>
      <PriceP>{pricePerCoin} $</PriceP>
      <QuantityP>{quantity}</QuantityP>
      <ButtonsWrapper>
        <button>edit</button>
        <button>remove</button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default TransactionModalItem;

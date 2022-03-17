import React from "react";
import { useDispatch } from "react-redux";
import { removeTransactionProperty } from "store";
import DeleteIcon from "assets/icons/remove.png";

import {
  ButtonsWrapper,
  PriceP,
  QuantityP,
  TransactionTypeP,
  Wrapper,
} from "./transaction-modal-item.styles";

const TransactionModalItem: React.FC<any> = ({
  transaction: {
    transactionID: transactionID,
    pricePerCoin,
    quantity,
    transactionBoughtValue,
    transactionType = "buy",
  },
  coin,
}) => {
  const dispatch = useDispatch();

  const handleDeleteTransactionProperty = () => {
    dispatch(removeTransactionProperty({ coin, transactionID }));
  };

  return (
    <Wrapper>
      <TransactionTypeP>{transactionType}</TransactionTypeP>
      <PriceP>{pricePerCoin} $</PriceP>
      <QuantityP>{quantity}</QuantityP>

      <img src={DeleteIcon} onClick={handleDeleteTransactionProperty} />
    </Wrapper>
  );
};

export default TransactionModalItem;

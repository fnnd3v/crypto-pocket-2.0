import React, { useContext, useEffect, useState } from "react";

import Modal from "components/modals/modal";
import useModal from "components/modals/useModal";
import TransactionModalWrapper from "./transaction-modal-wrapper/transaction-modal-wrapper";
import { PocketContext } from "components/client/providers/PocketProvider";

import {
  ButtonsWrapper,
  CurrentPriceP,
  Holding,
  HoldingQuantityP,
  HoldingQuantityValueP,
  NameWrapper,
  ProfitLossP,
  Wrapper,
} from "./transaction-wrapper.styles";

import AddTransactionIcon from "assets/icons/add.png";
import RemoveTransactionIcon from "assets/icons/remove.png";

const TransactionWrapper: React.FC<any> = ({
  transaction,
  transaction: { id, img, name, symbol, currentPrice, transactions },
}) => {
  // TODO: add to local string
  // add holding value: quantity * current price
  // add avg buy price: all transactions pricePerCoin / transactions.length
  // add profit/loss: transaction value * buyPrice - quantity * currentPrice

  const [totalHoldingQuantity, setTotalHoldingQuantity] = useState(0);
  const [totalHoldingQuantityValue, setTotalHoldingQuantityValue] = useState(0);
  const [profitLoss, setProfitLoss] = useState(0);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { setTotalProfitLoss } = useContext(PocketContext);

  // console.log(transactions);

  useEffect(() => {
    handleGetTotalHoldingQuantity();
  }, [transaction]);

  const handleGetTotalHoldingQuantity = () => {
    let holdingQuantity = 0;
    transactions.map((singleTransaction: any) => {
      holdingQuantity += singleTransaction.quantity;
    });
    setTotalHoldingQuantity(holdingQuantity);
    handleGetTotalHoldingValue(holdingQuantity);
  };

  const handleGetTotalHoldingValue = (holdingQuantity: any) => {
    const totalHoldingQuantityValue = holdingQuantity * currentPrice;
    setTotalHoldingQuantityValue(totalHoldingQuantityValue);
    handleCalcProfitLoss(totalHoldingQuantityValue);
  };

  const handleCalcProfitLoss = (totalHoldingQuantityValue: any) => {
    let totalBoughtValue = 0;
    transactions.map((singleTransaction: any) => {
      totalBoughtValue += singleTransaction.transactionBoughtValue;
    });

    let profit = totalHoldingQuantityValue - totalBoughtValue;

    setProfitLoss(profit);

    setTotalProfitLoss((prevState) => (prevState += profit));
  };

  const openModal = (e: any) => {
    if (e.target.id === "transaction-button") return;
    handleOpenModal();
  };

  const handleAddTransaction = () => {
    console.log("handle add trnasction");
  };

  const handleDeleteTransaction = () => {
    console.log("handle delete transacrtion");
  };

  return (
    <>
      <Wrapper onClick={openModal}>
        <img src={img} alt="coin logo" />
        <NameWrapper>
          <h3>{name}</h3>
          <p>{symbol}</p>
        </NameWrapper>
        <CurrentPriceP>{currentPrice.toLocaleString()} $</CurrentPriceP>
        <Holding>
          <HoldingQuantityValueP>
            {totalHoldingQuantityValue.toLocaleString()} $
          </HoldingQuantityValueP>
          <HoldingQuantityP>
            {totalHoldingQuantity} {symbol}
          </HoldingQuantityP>
        </Holding>
        <ProfitLossP value={profitLoss}>
          {profitLoss.toLocaleString()} $
        </ProfitLossP>
        <ButtonsWrapper>
          <img
            id="transaction-button"
            src={AddTransactionIcon}
            alt="add transaction "
            onClick={handleAddTransaction}
          />
          <img
            id="transaction-button"
            src={RemoveTransactionIcon}
            alt="remove transaction"
            onClick={handleDeleteTransaction}
          />
        </ButtonsWrapper>
      </Wrapper>

      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <TransactionModalWrapper transaction={transaction} />
        </Modal>
      ) : null}
    </>
  );
};

export default TransactionWrapper;

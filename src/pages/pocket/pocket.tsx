import { useContext } from "react";
import { useSelector } from "react-redux";

import { PocketContext } from "components/client/providers/PocketProvider";
import useModal from "components/modals/useModal";
import Modal from "components/modals/modal";
import { Button } from "components/ui/button/button";
import { Title } from "components/ui/title/title";
import { ViewWrapper } from "components/ui/view-wrapper/view-wrapper";
import TransactionWrapper from "./transaction-wrapper/transaction-wrapper";
import CoinPanel from "./coin-panel/coin-panel";

import {
  ButtonsWrapper,
  ContentWrapper,
  DetailsWrapper,
  ManageWrapper,
  Wrapper,
} from "./pocket.styles";

const Pocket = () => {
  const transactionsState = useSelector((state: any) => state.transactions);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  //FIXME: total profit calc value
  const { totalProfitLoss } = useContext(PocketContext);

  //TODO: add react hook form
  return (
    <ViewWrapper>
      <Wrapper>
        <ManageWrapper>
          <Title>Pocket</Title>
          <ButtonsWrapper>
            <Button onClick={handleOpenModal}>add</Button>
            <Button>sad</Button>
          </ButtonsWrapper>
          <DetailsWrapper>
            <p onClick={() => console.log(transactionsState)}>
              total: <span> /// </span>
            </p>
            <p>
              profit loss: <span> {totalProfitLoss.toLocaleString()} </span>
            </p>
          </DetailsWrapper>
        </ManageWrapper>
        <ContentWrapper>
          {transactionsState.length === 0 ? (
            <p>add your first transaction</p>
          ) : (
            transactionsState.map((transaction: any) => {
              return (
                <TransactionWrapper
                  transaction={transaction}
                  key={transaction.id}
                >
                  {transaction.symbol}
                </TransactionWrapper>
              );
            })
          )}
        </ContentWrapper>
      </Wrapper>

      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <CoinPanel handleCloseModal={handleCloseModal} />
        </Modal>
      ) : null}
    </ViewWrapper>
  );
};

export default Pocket;

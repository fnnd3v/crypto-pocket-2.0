import Modal from "components/modals/modal";
import useModal from "components/modals/useModal";
import { Button } from "components/ui/button/button";
import { Title } from "components/ui/title/title";
import { ViewWrapper } from "components/ui/view-wrapper/view-wrapper";
import {
  ButtonsWrapper,
  ContentWrapper,
  DetailsWrapper,
  ManageWrapper,
  Wrapper,
} from "./pocket.styles";

import { addTransaction } from "store";
import { useDispatch, useSelector } from "react-redux";

const Pocket = () => {
  const transactionsState = useSelector((state: any) => state.transactions);
  const dispatch = useDispatch();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleAddTransaction = () => {
    dispatch(
      addTransaction({
        id: "bitcoin",
        transactionProperty: {
          value: 11230,
          quantity: 1312,
          currentPrice: 51234,
        },
      })
    );
  };

  //TODO: add react hook form
  return (
    <ViewWrapper>
      <Wrapper>
        <ManageWrapper>
          <Title>Pocket</Title>
          <ButtonsWrapper>
            <Button onClick={handleOpenModal}>add</Button>
            <Button onClick={handleAddTransaction}>sad</Button>
          </ButtonsWrapper>
          <DetailsWrapper>
            <p onClick={() => console.log(transactionsState)}>total</p>
            <p>profit loss</p>
          </DetailsWrapper>
        </ManageWrapper>
        <ContentWrapper></ContentWrapper>
      </Wrapper>

      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <p>chuj 123</p>
        </Modal>
      ) : null}
    </ViewWrapper>
  );
};

export default Pocket;

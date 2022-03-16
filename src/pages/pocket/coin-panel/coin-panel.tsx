import React, { useState } from "react";
import styled from "styled-components";
import SelectCoin from "./select-coin/select-coin";
import TransactionDetails from "./transaction-details/transaction-details";

const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
  height: 90%;
`;

const CoinPanel: React.FC<any> = ({ handleCloseModal }) => {
  const [selectedCoin, setSelectedCoin] = useState(null);

  return (
    <Wrapper>
      {selectedCoin ? (
        <TransactionDetails
          selectedCoin={selectedCoin}
          handleCloseModal={handleCloseModal}
        />
      ) : (
        <SelectCoin setSelectedCoin={setSelectedCoin} />
      )}
    </Wrapper>
  );
};

export default CoinPanel;

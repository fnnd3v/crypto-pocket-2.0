import React, { useState } from "react";

import SelectCoin from "./select-coin/select-coin";
import TransactionDetails from "./transaction-details/transaction-details";

import { Wrapper } from "./coin-panel.styles";

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

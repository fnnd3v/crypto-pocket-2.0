import React, { useContext } from "react";

import { Title } from "components/ui/title/title";
import { CoinsContext } from "components/client/providers/CoinsProvider";

import { ContentWrapper, HeaderWrapper, Wrapper } from "./global.styles";

import GlobalIcon from "assets/icons/global.png";

const Global = () => {
  const {
    globalData,
    globalData: {
      active_cryptocurrencies: activeCrypto,
      market_cap_change_percentage_24h_usd: marketCapChange,
      market_cap_percentage: { btc: btcDomination, eth: ethDomination },
      markets,
    },
  } = useContext(CoinsContext);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Global market data</Title>
        <img src={GlobalIcon} alt="global data icon" />
      </HeaderWrapper>
      <ContentWrapper>
        <p> {activeCrypto} </p>
        <p> {marketCapChange} </p>
        <p> {markets} </p>
        <div>
          <p> {btcDomination} </p>
          <p> {ethDomination} </p>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Global;

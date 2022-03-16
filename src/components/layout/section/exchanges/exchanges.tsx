import React, { useContext } from "react";

import { Title } from "components/ui/title/title";
import { CoinsContext } from "components/client/providers/CoinsProvider";
import Loading from "components/ui/loading/loading";
import ExchangeItem from "./exchange-item/exchange-item";

import { ContentWrapper, HeaderWrapper, Wrapper } from "./exchange.styles";

import ExchaneIcon from "assets/icons/exchange.png";

const Exchanges = () => {
  const { exchangesList } = useContext(CoinsContext);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Exchanges</Title>
        <img src={ExchaneIcon} />
      </HeaderWrapper>
      <ContentWrapper>
        {exchangesList.length === 0 ? (
          <Loading />
        ) : (
          <>
            {exchangesList.map((exchange) => {
              return <ExchangeItem key={exchange.id} exchange={exchange} />;
            })}
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Exchanges;

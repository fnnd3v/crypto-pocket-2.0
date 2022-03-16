import React from "react";

import { MarketCapP, NameP, Wrapper } from "./trending-coin-item.styles";

const TrendingCoinItem: React.FC<any> = ({
  trendingCoin,
  trendingCoin: {
    id,
    coin_id,
    name,
    symbol,
    market_cap_rank: marketCapRank,
    price_btc: priceBTC,
    score,
    large: img,
  },
}) => {
  return (
    <Wrapper>
      <img src={img} alt="coin logo" />
      <NameP>{name}</NameP>
      <MarketCapP>
        rank <span> {marketCapRank} </span>{" "}
      </MarketCapP>
    </Wrapper>
  );
};

export default TrendingCoinItem;

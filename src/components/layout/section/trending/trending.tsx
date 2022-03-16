import React, { useContext } from "react";

import { CoinsContext } from "components/client/providers/CoinsProvider";
import { Title } from "components/ui/title/title";
import TrendingCoinItem from "./trending-coin-item/trending-coin-item";
import TrendingIcon from "assets/icons/trending.png";
import Loading from "components/ui/loading/loading";

import { ContentWrapper, HeaderWrapper, Wrapper } from "./trending.styles";

const Trending = () => {
  const { trendingCoins } = useContext(CoinsContext);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Trending coins</Title>
        <img src={TrendingIcon} />
      </HeaderWrapper>

      <ContentWrapper>
        {trendingCoins.length === 0 ? (
          <Loading />
        ) : (
          <>
            {trendingCoins.map((trendingCoin) => {
              // console.log(trendingCoin.item);
              return (
                <TrendingCoinItem
                  key={trendingCoin.item.coin_id}
                  trendingCoin={trendingCoin.item}
                />
              );
            })}
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Trending;

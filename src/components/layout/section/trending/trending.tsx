import { CoinsContext } from "components/client/providers/CoinsProvider";
import { Title } from "components/ui/title/title";
import React, { useContext } from "react";
import styled from "styled-components";
import TrendingCoinItem from "./trending-coin-item/trending-coin-item";
import TrendingIcon from "assets/icons/trending.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContentWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  padding-top: 10px;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;

  img {
    height: 90%;
  }
`;

const Trending = () => {
  const { trendingCoins } = useContext(CoinsContext);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Trending coins</Title>
        <img src={TrendingIcon} />
      </HeaderWrapper>

      <ContentWrapper>
        {trendingCoins.map((trendingCoin) => {
          // console.log(trendingCoin.item);
          return (
            <TrendingCoinItem
              key={trendingCoin.item.coin_id}
              trendingCoin={trendingCoin.item}
            />
          );
        })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Trending;

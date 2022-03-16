import { Title } from "components/ui/title/title";
import React from "react";
import styled from "styled-components";
import TrendingIcon from "assets/icons/trending.png";

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 40px;
  margin: 10px;
  padding: 5px 15px;
  position: relative;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  padding-right: 15px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  ${Title} {
    font-size: 15px;
  }

  img {
    height: 100%;
  }
`;

const NameP = styled.p`
  margin-left: 10px;
`;
const MarketCapP = styled.p`
  flex-grow: 1;
  font-weight: normal;
  text-align: right;

  span {
    font-weight: bold;
  }
`;

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
  console.log(trendingCoin);

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

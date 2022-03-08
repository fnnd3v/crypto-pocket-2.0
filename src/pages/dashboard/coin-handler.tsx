import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 16px;
  margin: 10px auto;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const RankP = styled.div`
  width: 2%;
  margin-right: 20px;
  background-color: red;
`;
const NameP = styled.p`
  width: 20%;
  background-color: red;
`;
const SymbolP = styled.p`
  width: 10%;
  background-color: red;
`;
const PriceP = styled.p`
  width: 10%;
  text-align: right;
  background-color: red;
`;
const PriceChangeP = styled.p`
  text-align: right;
  width: 10%;
  background-color: red;
`;

const ImgDiv = styled.div`
  /* width: 10%; */
  margin-right: 10px;
  height: 80%;
  img {
    height: 100%;
  }
`;

export interface Coin {
  coin: any;
}

const CoinHandler: React.FC<Coin> = ({
  coin: {
    name,
    id,
    symbol,
    current_price: price,
    market_cap_rank: rank,
    image,
    price_change_percentage_24h: priceChange,
  },
}) => {
  return (
    <Wrapper>
      <RankP>{rank}</RankP>
      <ImgDiv>
        <img src={image} />
      </ImgDiv>
      <NameP>{name}</NameP>
      <SymbolP>{symbol}</SymbolP>
      <PriceP>{price}</PriceP>
      <PriceChangeP>{priceChange}</PriceChangeP>
    </Wrapper>
  );
};

export default CoinHandler;

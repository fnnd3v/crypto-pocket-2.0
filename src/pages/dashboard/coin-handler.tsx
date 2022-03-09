import { MarketCoin } from "models/market.models";
import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import FavIcon from "assets/icons/favourite.png";
import FavIconBlack from "assets/icons/favourite-black.png";
import { CoinsContext } from "components/client/providers/CoinsProvider";

const Wrapper = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin: 10px auto;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const RankP = styled.div`
  width: 1%;
  margin-right: 20px;
`;
const NameP = styled.p`
  width: 20%;
  font-weight: bold;
`;
const SymbolP = styled.p`
  width: 10%;
`;
const PriceP = styled.p`
  width: 20%;
  text-align: right;
`;

const PriceChangeP = styled.p`
  text-align: right;
  width: 20%;
`;

const ImgDiv = styled.div`
  /* width: 10%; */
  margin-right: 10px;
  height: 60%;
  img {
    height: 100%;
  }
`;

const FavouriteBox = styled.div`
  width: 32px;
`;

interface CoinHandlerProps {
  coin: MarketCoin;
}

const CoinHandler: React.FC<CoinHandlerProps> = ({
  coin,
  coin: {
    market_cap_rank: rank,
    image,
    name,
    symbol,
    current_price: price,
    price_change_percentage_24h: priceChange,
    isFavourite,
  },
}) => {
  const { favouriteCoins, toggleFavouriteCoin } = useContext(CoinsContext);

  return (
    <Wrapper>
      <FavouriteBox onClick={() => toggleFavouriteCoin(coin)}>
        <img src={FavIconBlack} alt="fav icon" />
      </FavouriteBox>
      <RankP>{rank}.</RankP>
      <ImgDiv>
        <img src={image} alt="coin img" />
      </ImgDiv>
      <p> {isFavourite ? "chuj" : "duzy chuj"} </p>
      <NameP>{name}</NameP>
      <SymbolP>{symbol}</SymbolP>
      <PriceP>{price.toFixed(2)} $</PriceP>
      <PriceChangeP>{priceChange.toFixed(2)} %</PriceChangeP>
    </Wrapper>
  );
};

export default CoinHandler;

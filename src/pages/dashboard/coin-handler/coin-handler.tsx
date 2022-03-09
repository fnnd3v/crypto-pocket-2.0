import React, { useContext } from "react";

import { MarketCoin } from "models/market.models";
import { CoinsContext } from "components/client/providers/CoinsProvider";
import {
  FavouriteBox,
  ImgDiv,
  NameP,
  PriceChangeP,
  PriceP,
  RankP,
  SymbolP,
  Wrapper,
} from "./coin-handler.styles";

import FavIconBlack from "assets/icons/favourite-black.png";
import FavIcon from "assets/icons/favourite.png";

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
  const { toggleFavouriteCoin } = useContext(CoinsContext);

  return (
    <Wrapper>
      <RankP>{rank}.</RankP>
      <FavouriteBox onClick={() => toggleFavouriteCoin(coin)}>
        {isFavourite ? (
          <img src={FavIcon} alt="fav icon" />
        ) : (
          <img src={FavIconBlack} alt="un fav icon" />
        )}
      </FavouriteBox>
      <ImgDiv>
        <img src={image} alt="coin img" />
      </ImgDiv>
      <NameP>{name}</NameP>
      <SymbolP>{symbol}</SymbolP>
      <PriceP>{price.toFixed(2)} $</PriceP>
      <PriceChangeP value={priceChange}>
        {priceChange.toFixed(2)} %
      </PriceChangeP>
    </Wrapper>
  );
};

export default CoinHandler;

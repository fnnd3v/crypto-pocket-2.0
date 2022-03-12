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
import useModal from "components/modals/useModal";
import Modal from "components/modals/modal";

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
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleOpenCoinDetails = (e: any) => {
    if (e.target.id === "fav icon") return;
    handleOpenModal();
  };

  return (
    <>
      <Wrapper onClick={(e) => handleOpenCoinDetails(e)}>
        <RankP>{rank}.</RankP>
        <FavouriteBox onClick={() => toggleFavouriteCoin(coin)}>
          {isFavourite ? (
            <img id="fav icon" src={FavIcon} alt="fav icon" />
          ) : (
            <img id="fav icon" src={FavIconBlack} alt="un fav icon" />
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
      {isOpen ? (
        <Modal handleClose={handleCloseModal}>
          <p>chuj 123</p>
        </Modal>
      ) : null}
    </>
  );
};

export default CoinHandler;

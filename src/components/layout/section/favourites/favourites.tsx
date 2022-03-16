import React, { useContext } from "react";

import { CoinsContext } from "components/client/providers/CoinsProvider";
import { Title } from "components/ui/title/title";
import FavouriteCoinItem from "./favourite-coin-item/favourite-coin-item";

import { ContentWrapper, HeaderWrapper, Wrapper } from "./favourites.styles";

import FavouriteIcon from "assets/icons/favorite.png";

const Favourites: React.FC = () => {
  const { favouriteCoins } = useContext(CoinsContext);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Favourites</Title>
        <img src={FavouriteIcon} />
      </HeaderWrapper>

      <ContentWrapper>
        {favouriteCoins.map((coin) => (
          <FavouriteCoinItem key={coin.id} coin={coin} />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Favourites;

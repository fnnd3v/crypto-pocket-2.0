import React from "react";

import { Title } from "components/ui/title/title";

import {
  LogoImg,
  PriceP,
  RemoveImg,
  Wrapper,
} from "./favourite-coin-item.styles";

import RemoveIcon from "assets/icons/remove.png";

const FavouriteCoinItem: React.FC<any> = ({
  coin: {
    image,
    name,
    current_price: price,
    price_change_percentage_24h: priceChange,
  },
}) => {
  return (
    <Wrapper>
      <LogoImg src={image} alt="coin logo" />
      <Title>{name}</Title>
      <PriceP value={priceChange}>{price.toFixed(2)} $</PriceP>
      <RemoveImg src={RemoveIcon} />
    </Wrapper>
  );
};

export default FavouriteCoinItem;

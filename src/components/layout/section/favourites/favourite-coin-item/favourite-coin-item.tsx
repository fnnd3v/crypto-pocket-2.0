import { Title } from "components/ui/title/title";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 40px;
  margin: 10px;
  padding: 5px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.lightPurple};

  ${Title} {
    font-size: 15px;
  }

  img {
    height: 90%;
    margin-right: 10px;
  }
`;

interface StyledProps {
  value: number;
}

const PriceP = styled.p<StyledProps>`
  color: ${({ value, theme }) =>
    value > 0 ? theme.colors.success : theme.colors.error};
  text-align: right;
  font-weight: bold;
  width: 80%;
`;

const FavouriteCoinItem: React.FC<any> = ({
  coin: {
    image,
    name,
    current_price: price,
    price_change_percentage_24h: priceChange,
  },
}) => {
  console.log(priceChange);
  return (
    <Wrapper>
      <img src={image} alt="coin image" />
      <Title>{name}</Title>
      <PriceP value={priceChange}>{price.toFixed(2)} $</PriceP>
    </Wrapper>
  );
};

export default FavouriteCoinItem;

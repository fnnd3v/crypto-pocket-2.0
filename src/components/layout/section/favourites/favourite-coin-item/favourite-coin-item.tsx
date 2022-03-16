import { Title } from "components/ui/title/title";
import React from "react";
import styled from "styled-components";
import RemoveIcon from "assets/icons/remove.png";

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 40px;
  margin: 10px;
  padding: 5px;
  position: relative;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  padding-right: 10px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.5);
  ${Title} {
    font-size: 15px;
  }
`;

interface StyledProps {
  value: number;
}

const LogoImg = styled.img`
  height: 100%;
  margin-right: 10px;
`;

const PriceP = styled.p<StyledProps>`
  color: ${({ value, theme }) =>
    value > 0 ? theme.colors.success : theme.colors.error};
  text-align: right;
  font-weight: bold;
  width: 80%;
`;

const RemoveImg = styled.img`
  transform: translate(20px, -20px);
  height: 25px;
  cursor: pointer;
`;

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

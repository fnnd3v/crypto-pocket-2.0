import { CoinsContext } from "components/client/providers/CoinsProvider";
import { Title } from "components/ui/title/title";
import React, { useContext } from "react";
import styled from "styled-components";
import FavouriteCoinItem from "./favourite-coin-item/favourite-coin-item";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${Title} {
    width: 90%;
  }
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
`;

const Favourites: React.FC = () => {
  const { favouriteCoins } = useContext(CoinsContext);

  console.log(favouriteCoins);

  return (
    <Wrapper>
      <Title>Favourites</Title>
      <ContentWrapper>
        {favouriteCoins.map((coin) => (
          <FavouriteCoinItem key={coin.id} coin={coin} />
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Favourites;

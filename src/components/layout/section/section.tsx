import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { Button } from "components/ui/button/button";
import { Title } from "components/ui/title/title";
import Favourites from "./favourites/favourites";
import Exchanges from "./exchanges/exchanges";
import Trending from "./trending/trending";
import Global from "./global/global";
import { CoinsContext } from "components/client/providers/CoinsProvider";

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 5;
  padding: 10px;
  justify-content: space-between;
  align-items: center;

  ${Button} {
    height: 30px;
    margin: 0;
    flex-grow: 0.2;
  }
`;

const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 90%;
  height: 90%;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.6);
`;

const Section = () => {
  //TODO: NAVIGATION
  const [activeSection, setActiveSection] = useState<string>("favourites");
  const { favouriteCoins } = useContext(CoinsContext);

  const handleChangeSection = (e: any) => {
    const section = e.target.dataset.section;
    if (section === activeSection) return;
    setActiveSection(section);
  };

  useEffect(() => {
    if (favouriteCoins.length === 0) setActiveSection("trending");
  }, []);

  const returnSection = () => {
    switch (activeSection) {
      case "favourites":
        return <Favourites />;
      case "trending":
        return <Trending />;
      case "exchanges":
        return <Exchanges />;
      case "global":
        return <Global />;
    }
  };
  return (
    <Wrapper>
      <ButtonsWrapper>
        <Button
          data-section="favourites"
          onClick={(e) => handleChangeSection(e)}
        >
          Favouites
        </Button>
        <Button onClick={(e) => handleChangeSection(e)} data-section="trending">
          Trending
        </Button>
        <Button
          onClick={(e) => handleChangeSection(e)}
          data-section="exchanges"
        >
          Exchanges
        </Button>
        <Button onClick={(e) => handleChangeSection(e)} data-section="global">
          Global
        </Button>
      </ButtonsWrapper>

      <ContentWrapper>{returnSection()}</ContentWrapper>
    </Wrapper>
  );
};

export default Section;

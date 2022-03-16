import React, { useContext, useEffect, useState } from "react";

import { CoinsContext } from "components/client/providers/CoinsProvider";
import { Button } from "components/ui/button/button";
import Favourites from "./favourites/favourites";
import Exchanges from "./exchanges/exchanges";
import Trending from "./trending/trending";
import Global from "./global/global";

import { ButtonsWrapper, ContentWrapper, Wrapper } from "./section.styles";

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

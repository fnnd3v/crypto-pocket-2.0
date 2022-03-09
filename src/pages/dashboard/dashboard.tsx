import React, { useContext } from "react";

import { CoinsContext } from "components/client/providers/CoinsProvider";
import Loading from "components/ui/loading/loading";
import { Title } from "components/ui/title/title";
import { ViewWrapper } from "components/ui/view-wrapper/view-wrapper";
import CoinHandler from "./coin-handler/coin-handler";
import { ContentWrapper, PanelWrapper, Wrapper } from "./dashboard.styles";

const Dashboard: React.FC = () => {
  const { market } = useContext(CoinsContext);
  console.log(market);

  return (
    <ViewWrapper>
      <Wrapper>
        <PanelWrapper>
          <Title>Dashboard</Title>
        </PanelWrapper>
        <ContentWrapper>
          {market.length > 0 ? (
            market.map((coin) => <CoinHandler key={coin.id} coin={coin} />)
          ) : (
            <Loading />
          )}
        </ContentWrapper>
      </Wrapper>
    </ViewWrapper>
  );
};

export default Dashboard;

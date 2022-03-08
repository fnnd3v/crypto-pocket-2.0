import { CoinsContext } from "components/client/providers/CoinsProvider";
import { Title } from "components/ui/title/title";
import { ViewWrapper } from "components/ui/view-wrapper/view-wrapper";
import React, { useContext } from "react";
import styled from "styled-components";
import CoinHandler from "./coin-handler";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const PanelWrapper = styled.div`
  height: 20%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: scroll;
`;

const Dashboard: React.FC = () => {
  const { market } = useContext(CoinsContext);

  return (
    <ViewWrapper>
      <Wrapper>
        <PanelWrapper>
          <Title>Dashboard</Title>
        </PanelWrapper>
        <ContentWrapper>
          {market.map((coin, index) => {
            return <CoinHandler key={index} coin={coin} />;
          })}
        </ContentWrapper>
      </Wrapper>
    </ViewWrapper>
  );
};

export default Dashboard;

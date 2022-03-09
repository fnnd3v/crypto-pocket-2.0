import { Button } from "components/ui/button/button";
import { Title } from "components/ui/title/title";
import { ViewWrapper } from "components/ui/view-wrapper/view-wrapper";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ManageWrapper = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const ContentWrapper = styled.div`
  width: 70%;
  height: 100%;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const DetailsWrapper = styled.div`
  width: 100%;
`;

const Pocket = () => {
  return (
    <ViewWrapper>
      <Wrapper>
        <ManageWrapper>
          <Title>Pocket</Title>
          <ButtonsWrapper>
            <Button>add</Button>
            <Button>sad</Button>
          </ButtonsWrapper>
          <DetailsWrapper>
            <p>total</p>
            <p>profit loss</p>
          </DetailsWrapper>
        </ManageWrapper>
        <ContentWrapper></ContentWrapper>
      </Wrapper>
    </ViewWrapper>
  );
};

export default Pocket;

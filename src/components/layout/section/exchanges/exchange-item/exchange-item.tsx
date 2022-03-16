import React from "react";

import {
  LinkIconWrapper,
  MarketCapP,
  NameP,
  Wrapper,
} from "./exchange-item.styles";

import LinkIcon from "assets/icons/link.png";

const ExchangeItem: React.FC<any> = ({
  exchange,
  exchange: { id, name, image, trust_score_rank: trustScoreRank, url },
}) => {
  return (
    <Wrapper>
      <img src={image} alt="coin logo" />
      <NameP>{name}</NameP>
      <MarketCapP>
        rank <span> {trustScoreRank} </span>
      </MarketCapP>
      <LinkIconWrapper target="_blank" href={url}>
        <img src={LinkIcon} />
      </LinkIconWrapper>
    </Wrapper>
  );
};

export default ExchangeItem;

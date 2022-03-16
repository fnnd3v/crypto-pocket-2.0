import styled from "styled-components";

import { Title } from "components/ui/title/title";

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 40px;
  margin: 10px;
  padding: 5px 10px;
  position: relative;
  padding-right: 30px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  ${Title} {
    font-size: 15px;
  }

  img {
    height: 100%;
  }
`;

export const NameP = styled.p`
  margin-left: 10px;
`;
export const MarketCapP = styled.p`
  flex-grow: 1;
  font-weight: normal;
  text-align: right;

  span {
    font-weight: bold;
  }
`;

export const LinkIconWrapper = styled.a`
  height: 70%;
  position: absolute;
  right: -10px;
  top: -15px;
`;

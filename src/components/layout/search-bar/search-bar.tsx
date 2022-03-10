import { searchCoin } from "api/crypto-api";
import { Input } from "components/ui/input/input";
import { SearchCoins } from "models/search.models";
import React, { useEffect, useState } from "react";
import { debounce } from "lodash";
import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

const InputWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    max-width: 550px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const ContentWrapper = styled.ul`
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 16px;
  position: absolute;
  max-width: 550px;
  width: 100%;
  padding: 20px;
  list-style: none;
  overflow-y: scroll;
  z-index: 9999;
  max-height: 400px;
  top: 80%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  left: 50%;
  transform: translateX(-50%);

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    height: 40px;
    border-radius: 10px;
    margin: 10px;
    background-color: #fff;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
    img {
      height: 70%;
      margin: 0 20px 0 0;
    }
    span {
      font-weight: bold;
      margin-left: 5px;
    }
  }
`;

const SearchBar = () => {
  const [searchingValue, setSearchingValue] = useState<string>("");
  const [matchingCoins, setMatchingCoins] = useState<SearchCoins[]>([]);

  useEffect(() => {
    if (searchingValue.length === 0) return setMatchingCoins([]);

    fetchData();
  }, [searchingValue]);

  const fetchData = debounce(async () => {
    const {
      data: { coins },
    } = await searchCoin(searchingValue);
    setMatchingCoins(coins);
  }, 300);

  return (
    <SearchBarWrapper>
      <div>
        User:
        <br />
        <span>Jachym</span>
      </div>
      <InputWrapper>
        <Input
          placeholder="search coin"
          value={searchingValue}
          onChange={(e) => setSearchingValue(e.target.value)}
        />
        {matchingCoins.length > 0 ? (
          <ContentWrapper>
            {matchingCoins.map((coin) => {
              console.log(coin);
              return (
                <li>
                  <img src={coin.thumb} alt="coin icon" /> {coin.name}{" "}
                </li>
              );
            })}
          </ContentWrapper>
        ) : null}
      </InputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;

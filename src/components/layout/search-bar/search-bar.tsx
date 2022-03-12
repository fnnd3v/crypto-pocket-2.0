import React, { useEffect, useState } from "react";
import { searchCoin } from "api/crypto-api";
import { debounce } from "lodash";

import { Input } from "components/ui/input/input";
import { SearchCoins } from "models/search.models";

import {
  ContentWrapper,
  InputWrapper,
  SearchBarWrapper,
} from "./search-bar.styles";

const SearchBar = () => {
  //TODO: add combobox and coins to fav
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
              return (
                <li key={coin.id}>
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

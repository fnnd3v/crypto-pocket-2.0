import React, { useContext, useEffect, useState } from "react";
import { searchCoin } from "api/crypto-api";
import debounce from "lodash.debounce";

import { PocketContext } from "components/client/providers/PocketProvider";
import { Input } from "components/ui/input/input";
import Loading from "components/ui/loading/loading";
import { Title } from "components/ui/title/title";

import { ContentWrapper, Wrapper } from "./select-coin.styles";

const SelectCoin: React.FC<any> = ({ setSelectedCoin }) => {
  // TODO: add ' ' include in input searching

  const { initialSearchValue } = useContext(PocketContext);
  const [searchingCoin, setSearchingCoin] = useState<any>("");
  const [matchingCoins, setMatchingCoins] = useState<any[]>([]);

  const handleInput = (e: any) => {
    setSearchingCoin(e.target.value);
  };

  //FIXME: memory leak
  // useEffect(() => {
  //   let abortController = new AbortController();

  //   handleSearchCoin();

  //   return () => {
  //     abortController.abort();
  //   };
  // }, [searchingCoin]);

  const handleSearchCoin = debounce(async () => {
    if (searchingCoin.length === 0) return setMatchingCoins([]);

    const {
      data: { coins },
    } = await searchCoin(searchingCoin);
    await console.log(coins);
    setMatchingCoins(coins);
  }, 300);

  return (
    <Wrapper>
      <Title>Select coin</Title>
      <Input
        placeholder="find coin"
        value={searchingCoin}
        onChange={(e) => handleInput(e)}
        name="Search"
        id="search"
      />
      <ContentWrapper>
        {initialSearchValue.length === 0 ? (
          <Loading />
        ) : matchingCoins.length === 0 ? (
          initialSearchValue.map((coin) => {
            return (
              <li onClick={() => setSelectedCoin(coin)} key={coin.id}>
                <img src={coin.large} alt="coin logo" />
                <h3>{coin.name}</h3>
                <p>({coin.symbol})</p>
              </li>
            );
          })
        ) : (
          matchingCoins.map((coin) => {
            return (
              <li onClick={() => setSelectedCoin(coin)} key={coin.id}>
                <img src={coin.large} alt="coin logo" />
                <h3>{coin.name}</h3>
                <p>({coin.symbol})</p>
              </li>
            );
          })
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default SelectCoin;

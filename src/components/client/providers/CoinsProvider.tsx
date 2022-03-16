import {
  getExchanges,
  getGlobalData,
  getMarket,
  getTrendingCoins,
} from "api/crypto-api";
import { MarketCoin } from "models/market.models";
import React, { useState, useEffect } from "react";

interface SettingsContextInterface {
  market: MarketCoin[];
  favouriteCoins: MarketCoin[];
  toggleFavouriteCoin: (coin: MarketCoin) => void;
  trendingCoins: any[];
  exchangesList: any[];
  globalData: any;
}

export const CoinsContext = React.createContext<SettingsContextInterface>({
  market: [],
  favouriteCoins: [],
  toggleFavouriteCoin: () => {},
  trendingCoins: [],
  exchangesList: [],
  globalData: {},
});

const CoinsProvider: React.FC = ({ children }) => {
  const [market, setMarket] = useState<MarketCoin[]>([]);
  const [favouriteCoins, setFavouriteCoins] = useState<MarketCoin[]>([]);
  const [trendingCoins, setTrendingCoins] = useState<any>([]);
  const [exchangesList, setExchangesList] = useState<any>([]);
  const [globalData, setGlobalData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getMarket();
      setMarket(
        data.map((coin: MarketCoin) => ({ ...coin, isFavourite: false }))
      );
    })();
  }, []);

  // get trending coins
  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const fetchTrendingCoins = async () => {
    const { data } = await getTrendingCoins();
    setTrendingCoins(data.coins);
  };

  //get exchanges
  useEffect(() => {
    fetchExchanges();
  }, []);

  const fetchExchanges = async () => {
    const { data } = await getExchanges();
    setExchangesList(data);
  };

  //get global data
  useEffect(() => {
    fetchGlobalData();
  }, []);

  const fetchGlobalData = async () => {
    const { data } = await getGlobalData();
    setGlobalData(data.data);
  };

  const toggleFavouriteCoin = (coin: MarketCoin) => {
    if (coin.isFavourite) {
      const favCoin = { ...coin, isFavourite: false };
      setMarket(
        market.map((marketCoin: MarketCoin) =>
          marketCoin.id === coin.id
            ? { ...marketCoin, isFavourite: false }
            : marketCoin
        )
      );

      const filteredCoins = favouriteCoins.filter(
        (coinToDelete) => coinToDelete.id !== coin.id
      );
      setFavouriteCoins(filteredCoins);
    } else {
      const favCoin = { ...coin, isFavourite: true };
      setMarket(
        market.map((marketCoin: MarketCoin) =>
          marketCoin.id === coin.id
            ? { ...marketCoin, isFavourite: true }
            : marketCoin
        )
      );
      setFavouriteCoins([...favouriteCoins, favCoin]);
    }
  };

  return (
    <CoinsContext.Provider
      value={{
        market,
        favouriteCoins,
        toggleFavouriteCoin,
        trendingCoins,
        exchangesList,
        globalData,
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};

export default CoinsProvider;

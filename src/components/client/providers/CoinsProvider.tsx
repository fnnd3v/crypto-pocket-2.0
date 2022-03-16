import { getMarket, getTrendingCoins, searchCoin } from "api/crypto-api";
import { MarketCoin } from "models/market.models";
import { SearchCoins } from "models/search.models";
import React, { useState, useEffect } from "react";

interface SettingsContextInterface {
  market: MarketCoin[];
  favouriteCoins: MarketCoin[];
  toggleFavouriteCoin: (coin: MarketCoin) => void;
  trendingCoins: any[];
}

export const CoinsContext = React.createContext<SettingsContextInterface>({
  market: [],
  favouriteCoins: [],
  toggleFavouriteCoin: () => {},
  trendingCoins: [],
});

const CoinsProvider: React.FC = ({ children }) => {
  const [market, setMarket] = useState<MarketCoin[]>([]);
  const [favouriteCoins, setFavouriteCoins] = useState<MarketCoin[]>([]);
  const [trendingCoins, setTrendingCoins] = useState<any>([]);

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
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};

export default CoinsProvider;

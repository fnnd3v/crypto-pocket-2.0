import axios from "axios";

export const getSingleCoinPrice = async (id: string) =>
  await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
  );

export const getMarket = async () =>
  await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );

export const searchCoin = async (coin: string) =>
  await axios.get(`https://api.coingecko.com/api/v3/search?query=${coin}`);

export const getTrendingCoins = async () =>
  await axios.get("https://api.coingecko.com/api/v3/search/trending");

export const getExchanges = async () =>
  await axios.get("https://api.coingecko.com/api/v3/exchanges?per_page=10");

export const getGlobalData = async () =>
  await axios.get("https://api.coingecko.com/api/v3/global");

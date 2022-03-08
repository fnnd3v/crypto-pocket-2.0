import axios from "axios";
import { useEffect } from "react";

export const getSingleCoinPrice = async (id: string) =>
  await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
  );

export const getMarket = async () =>
  await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
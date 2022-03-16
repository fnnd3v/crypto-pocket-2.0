import { getMarket, searchCoin } from "api/crypto-api";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction } from "store";

interface SettingsContextInterface {
  initialSearchValue: any[];
  handleAddTransactionToStore: (
    quantity: any,
    pricePerCoin: any,
    currentPrice: any,
    id: any,
    image: any,
    symbol: any,
    name: any,
    transactionTotalValue: any
  ) => any;
  totalProfitLoss: number;
  setTotalProfitLoss: React.Dispatch<React.SetStateAction<number>>;
}

export const PocketContext = React.createContext<SettingsContextInterface>({
  initialSearchValue: [],
  handleAddTransactionToStore: () => {},
  setTotalProfitLoss: () => {},
  totalProfitLoss: 0,
});

const PocketProvider: React.FC = ({ children }) => {
  const [initialSearchValue, setInitialSearchValue] = useState<any>([]);
  const transactionsState = useSelector((state: any) => state.transactions);
  const dispatch = useDispatch();
  const [totalProfitLoss, setTotalProfitLoss] = useState<number>(0);

  useEffect(() => {
    handleInitialValue();
  }, []);

  const handleInitialValue = async () => {
    const {
      data: { coins },
    } = await searchCoin(" ");
    setInitialSearchValue(coins.splice(0, 100));
  };

  const handleAddTransactionToStore = (
    currentPrice: any,
    id: any,
    img: any,
    symbol: any,
    pricePerCoin: any,
    quantity: any,
    name: any,
    transactionTotalValue: any
  ) => {
    dispatch(
      addTransaction({
        currentPrice,
        id,
        img,
        symbol,
        name,
        transactionProperty: {
          pricePerCoin,
          quantity,
          transactionTotalValue,
        },
      })
    );
  };

  return (
    <PocketContext.Provider
      value={{
        initialSearchValue,
        handleAddTransactionToStore,
        totalProfitLoss,
        setTotalProfitLoss,
      }}
    >
      {children}
    </PocketContext.Provider>
  );
};

export default PocketProvider;

import { getMarket } from "api/crypto-api";
import React, { useState, useEffect } from "react";

interface SettingsContextInterface {
  market: object[];
}

export const CoinsContext = React.createContext<SettingsContextInterface>({
  market: [],
});

const CoinsProvider: React.FC = ({ children }) => {
  const [market, setMarket] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getMarket();
      setMarket(data);
    })();
  }, []);

  return (
    <CoinsContext.Provider
      value={{
        market,
      }}
    >
      {children}
    </CoinsContext.Provider>
  );
};

export default CoinsProvider;

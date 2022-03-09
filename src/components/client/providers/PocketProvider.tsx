import { getMarket } from "api/crypto-api";
import React, { useState, useEffect } from "react";

interface SettingsContextInterface {
  init: () => void;
}

export const PocketContext = React.createContext<SettingsContextInterface>({
  init: () => {},
});

const PocketProvider: React.FC = ({ children }) => {
  const init = () => {
    console.log("init");
  };

  return (
    <PocketContext.Provider
      value={{
        init,
      }}
    >
      {children}
    </PocketContext.Provider>
  );
};

export default PocketProvider;

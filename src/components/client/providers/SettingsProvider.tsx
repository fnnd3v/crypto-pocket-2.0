import React from "react";

interface SettingsContextInterface {
  init: Function;
}

export const SettingsContext = React.createContext<SettingsContextInterface>({
  init: () => {},
});

const SettingsProvider: React.FC = ({ children }) => {
  const init = () => {
    console.log("init");
  };

  return (
    <SettingsContext.Provider
      value={{
        init,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

import { SettingsContext } from "components/client/providers/SettingsProvider";
import { ViewWrapper } from "components/ui/view-wrapper/view-wrapper";
import React, { useContext } from "react";

const Settings = () => {
  const { init } = useContext(SettingsContext);

  init();

  return (
    <ViewWrapper>
      <p>settings</p>
    </ViewWrapper>
  );
};

export default Settings;

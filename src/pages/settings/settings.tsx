import { theme } from "assets/styles/theme";
import { ViewWrapper } from "components/ui/view-wrapper/view-wrapper";

const Settings = () => {
  const handleChangeTheme = () => {
    theme.colors.darkGrey = "#444";
  };
  return (
    <ViewWrapper>
      <p>settings</p>
      <button onClick={handleChangeTheme}></button>
    </ViewWrapper>
  );
};

export default Settings;

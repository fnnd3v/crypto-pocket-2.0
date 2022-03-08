import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/global-style";

import { theme } from "assets/styles/theme";
import MainTemplate from "components/layout/main-template/main-template";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <p>chuj</p>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default App;

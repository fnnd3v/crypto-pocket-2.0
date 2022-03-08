import React from "react";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/global-style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "assets/styles/theme";
import MainTemplate from "components/layout/main-template/main-template";
import Dashboard from "pages/dashboard/dashboard";
import Pocket from "pages/pocket/pocket";
import Profile from "pages/profile/profile";
import Settings from "pages/settings/settings";
import SettingsProvider from "components/client/providers/SettingsProvider";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SettingsProvider>
          <MainTemplate>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pocket" element={<Pocket />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </MainTemplate>
        </SettingsProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;

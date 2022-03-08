import React from "react";

import { Logo, StyledLink, Wrapper } from "./navigation.styles";

import DashboardIcon from "assets/icons/dashboard.png";
import PocketIcon from "assets/icons/bitcoin-wallet.png";
import ProfileIcon from "assets/icons/profile.png";
import SettingsIcon from "assets/icons/admin.png";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Crypto <br /> Pocket
        </h1>
      </Logo>

      <StyledLink to="/dashboard">
        <img src={DashboardIcon} alt="dashboard icon" />
      </StyledLink>
      <StyledLink to="/pocket">
        <img src={PocketIcon} alt="pocket icon" />
      </StyledLink>
      <StyledLink to="/profile">
        <img src={ProfileIcon} alt="profile icon" />
      </StyledLink>
      <StyledLink to="/settings">
        <img src={SettingsIcon} alt="settings icon" />
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;

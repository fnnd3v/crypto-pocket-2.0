import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const PanelWrapper = styled.div`
  height: 20%;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow-y: scroll;
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

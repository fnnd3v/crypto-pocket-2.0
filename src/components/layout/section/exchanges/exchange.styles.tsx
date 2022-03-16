import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContentWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  padding-top: 10px;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;

  img {
    height: 90%;
    margin-left: 10px;
  }
`;

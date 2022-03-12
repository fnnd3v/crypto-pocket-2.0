import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ManageWrapper = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const ContentWrapper = styled.div`
  width: 70%;
  height: 100%;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const DetailsWrapper = styled.div`
  width: 100%;
`;

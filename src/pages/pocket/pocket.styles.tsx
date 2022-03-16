import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ManageWrapper = styled.div`
  width: 25%;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

export const ContentWrapper = styled.div`
  padding: 10px;
  width: 75%;
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
  padding: 10px;
  font-size: 18px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  p {
    display: flex;
    width: 100%;
    justify-content: space-between;

    span {
      flex-grow: 1;
      text-align: right;
    }
  }
`;

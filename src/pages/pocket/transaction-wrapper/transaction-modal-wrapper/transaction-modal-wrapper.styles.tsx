import styled from "styled-components";

export const Wrapper = styled.div`
  width: 800px;
  height: 90%;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StatisticsWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  position: relative;

  button {
    position: absolute;
    right: 0%;
    top: 0;
    margin: 0;
  }
`;
export const TransactionsWrapper = styled.ul`
  width: 100%;
  height: 63%;
  list-style: none;
  overflow-y: scroll;
`;

export const MapWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  width: 90%;
  text-align: left;
  justify-content: space-around;

  p {
    width: 20%;
    text-align: right;
  }
`;
export const StyledLogo = styled.img`
  height: 100%;
  margin-right: 10px;
`;
export const InfoWrapper = styled.div`
  width: auto;
  height: 40%;
  display: flex;
`;
export const DetailsWrapper = styled.div`
  display: flex;
  height: 100%;
`;
export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 10px 5px;
  padding: 10px;
  flex-basis: 25%;

  span {
    font-weight: bold;
  }
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 800px;
  height: 100%;
`;
export const StatisticsWrapper = styled.div`
  width: 100%;
  height: 30%;
  background-color: red;
  display: flex;

  img {
    height: 40px;
  }
`;
export const TransactionsWrapper = styled.ul`
  width: 100%;
  height: 70%;
  list-style: none;
  overflow-y: scroll;
`;

export const MapWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;

  p {
    width: 18%;
    text-align: right;
  }
`;

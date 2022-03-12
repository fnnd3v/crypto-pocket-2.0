import styled from "styled-components";

interface StyledProps {
  value: number;
}

export const Wrapper = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  /* border: 1px solid ${({ theme }) => theme.colors.darkPurple}; */
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin: 10px auto;
  height: 50px;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
`;

export const RankP = styled.div`
  width: 3%;
  margin-right: 20px;
`;
export const NameP = styled.p`
  width: 20%;
`;
export const SymbolP = styled.p`
  text-transform: uppercase;
  width: 10%;
`;
export const PriceP = styled.p`
  width: 20%;
  text-align: right;
`;

export const PriceChangeP = styled.p<StyledProps>`
  color: ${({ value, theme }) =>
    value > 0 ? theme.colors.success : theme.colors.error};

  text-align: right;
  width: 20%;
`;

export const ImgDiv = styled.div`
  /* width: 10%; */
  margin-right: 10px;
  height: 60%;
  img {
    height: 100%;
  }
`;

export const FavouriteBox = styled.div`
  z-index: 999;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
`;

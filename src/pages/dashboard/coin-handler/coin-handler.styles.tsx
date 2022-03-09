import styled from "styled-components";

interface StyledProps {
  value: number;
}

export const Wrapper = styled.div`
  width: 95%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
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
`;

export const RankP = styled.div`
  margin-right: 20px;
`;
export const NameP = styled.p`
  width: 20%;
  font-weight: bold;
`;
export const SymbolP = styled.p`
  width: 10%;
`;
export const PriceP = styled.p`
  width: 20%;
  text-align: right;
`;

export const PriceChangeP = styled.p<StyledProps>`
  color: ${({ value, theme }) =>
    value > 0 ? theme.colors.success : theme.colors.error};
  font-weight: bold;
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
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
`;

import { Input } from "components/ui/input/input";
import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

export const InputWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 100%;
    max-width: 550px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const ContentWrapper = styled.ul`
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 16px;
  position: absolute;
  max-width: 550px;
  width: 100%;
  padding: 20px;
  list-style: none;
  overflow-y: scroll;
  z-index: 9999;
  max-height: 400px;
  top: 80%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  left: 50%;
  transform: translateX(-50%);

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 15px;
    height: 40px;
    border-radius: 10px;
    margin: 10px;
    background-color: #fff;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    cursor: pointer;
    img {
      height: 70%;
      margin: 0 20px 0 0;
    }
    span {
      font-weight: bold;
      margin-left: 5px;
    }
  }
`;

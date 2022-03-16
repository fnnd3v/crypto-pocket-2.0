import { Input } from "components/ui/input/input";
import { Title } from "components/ui/title/title";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;

  flex-direction: column;
  align-items: center;

  ${Input} {
    width: 90%;
  }

  ${Title} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
    width: 90%;
  }
`;

export const ContentWrapper = styled.ul`
  width: 90%;
  height: 70%;
  border-radius: 16px;
  padding: 10px;
  overflow-y: scroll;
  list-style: none;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.colors.lightPurple};

  li {
    width: 100%;
    height: 40px;
    margin: 10px auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 16px;
    font-size: 14px;
    background-color: white;
    padding: 0 10px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.darkGrey};
    img {
      height: 70%;
      margin-right: 30px;
    }

    h3 {
      margin-right: 10px;
      font-weight: bold;
    }
  }
`;

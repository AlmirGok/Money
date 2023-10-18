import styled from "styled-components";
import { colors, sizes } from "../../theme";

export const Container = styled.div`
  background-color: ${colors.background};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
    margin: 0px;
    padding: 0px;
    background-color: ${colors.backgroundTwo};
    border-radius: 15px;
    padding: 30px;
    input {
      height: 60px;
      border-radius: 10px;
      overflow: hidden;
      padding: 0px 20px;
      border: none;
      font-size: ${sizes.s};
    }
    span:nth-of-type(2) {
      margin-top: 20px;
    }
    span {
      display: flex;
      line-height: 20px;
      font-size: 15px;
      margin-top: 10px;
      color: #f74a4ac9;
      margin-bottom: -20px;
    }
    button {
      height: 55px;
      border: none;
      border-radius: 5px;
      font-size: ${sizes.s};
      cursor: pointer;
      background-color: ${colors.primaryGreen};
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
    button:nth-of-type(1) {
      height: 40px;
      border: none;
      background: transparent;
      border-radius: 5px;
      color: #fff;
      margin-top: -10px;
    }
    button:nth-of-type(3) {
      height: 50px;
      border: none;
      border-radius: 5px;
      background-color: transparent;
      color: #fff;
      border: solid 1px ${colors.primaryGreen};
    }
  }
`;

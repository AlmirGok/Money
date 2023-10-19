import styled from "styled-components";
import { colors, sizes } from "../../theme";

export const Container = styled.div`
  background-color: #01095c7c;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  img {
    width: 120px;
    height: 120px;
    border-radius: 130px;
  }
`;

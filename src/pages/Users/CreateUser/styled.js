import styled, { css } from "styled-components";
import img from '../../../assets/images/background3.png';

export const UserComponent = styled.body`
  background: url(${img});
  background-size: cover;

  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  margin: -8px -8px;
  overflow-x: hidden;
  overflow-y: hidden;


  *{
    margin:0;
    padding:0;
    box-sizing: border-box;

  }
`;
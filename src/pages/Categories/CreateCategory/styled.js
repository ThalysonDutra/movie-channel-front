import styled from "styled-components";

import img from '../../../assets/images/background.png';

export const CategoryComponent = styled.body`
  background: url(${img});
  background-size: cover;

  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow-x: hidden;
  overflow-y: hidden;


  *{
    margin:0;
    padding:0;
    box-sizing: border-box;

  }
`;
import styled from "styled-components";

import img from '../../../assets/images/backgroundlists.png';

export const ListUserComponent = styled.body`
  background: url(${img});
  background-size: cover;

  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  margin: 0px 0px;
  overflow-x: hidden;
  overflow-y: scroll;


  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  a{
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight:bold;
   }

   .menu{
    padding:0;
    margin: 25px 0 10px 60px;
    max-width: 50px;
   }
`;
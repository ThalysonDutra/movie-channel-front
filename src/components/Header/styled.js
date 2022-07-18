import styled from "styled-components";

export const Nav = styled.nav`
  background: #000 ;
  opacity: 85%;
  display: flex;
  justify-content: space-between;
  margin: -8px 0;
  position:fixed;
  width: 100vw;

  img{
    margin: 10px 40px;
    height: 90px;
    width: 390px;
  }

  .banner{
    width: 100vw;
    position: absolute;
    margin: -18px -15px 0 -10px;    
  }

  a{
    color: black;
    margin: 0 5px 0;
    font-weight: bold;
    text-decoration: none;
    box-direction: none;
    color: #fff;
    font-size: 18px;
    align-items: center;
  }

  h1{
    font-family: sans-serif;
    font-size: 30px;
  }

  .title{

    margin: 0 0px;
    justify-content: center;
    align-items: center;
  }

  .menu{
    margin: auto 30px;
  }
  .menu-item{
    color: #fff;
    vertical-align: bottom;
    margin: 0 0px;

  }

  .menu-item a{
    vertical-align: bottom;
    margin: auto 2.5px;

  }

`;

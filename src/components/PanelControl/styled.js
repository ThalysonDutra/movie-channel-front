import styled from "styled-components";

export const PanelControlComponent = styled.body`
    margin: 35vh 14vw 0%;
    background-color: unset;
    border-color: unset;
 
  .menu-item{
    color: #fff;
    display: inline;
    margin: 0 auto;
  }

p{
    font-family: Geneva, Verdana, sans-serif;
    color: #fff;
    font-size: 20px;
}

    
  
button p{
    font-family: Geneva, Verdana, sans-serif;
    color: #fff;
    margin: 0 10px;
    font-size: 20px;
  }

.nameButton{
    display: inline;
    vertical-align:bottom;
    margin: 0 10px;
}


  button {
    width: 400px;
    height: 200px;
    background-color: #3B0071 ;
    border-radius: 10px;
    font-size: 20px;
    transition: all 300ms;
    margin: 15px 15px;
    cursor: pointer;
    
    
  }

  .btn-primary{
    border-color: #3B0071;

  }

  .btn-primary:hover{
    filter: brightness(100%);
    background-color: #DB7093;
    border-color: #DB7093;

  }

`;
import styled from "styled-components";

export const Form = styled.form`


  div{
    margin: 40vh 20vw;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    float: right;
    }

  input {
    width: 300px;
    height: 60px;
    background-color: #f8f8fb ;
    border-radius: 3px;
    border: 1px solid #ddd;
    padding: 0 10px;
    flex-direction: column;

    &:focus{
      border: 1 px solid #3B0071;
    }
    margin: 10px;
  }

  button {
    width: 150px;
    height: 60px;
    background-color: #3B0071 ;
    border-radius: 3px;
    border: none;
    color: #fff;
    transition: all 300ms;
    margin: 10px 10px;

  }

  button:hover{
    filter: brightness(75%);
  }



`;
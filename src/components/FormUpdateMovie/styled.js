import styled from "styled-components";

export const FormUpdateMovieComponent = styled.form`
    box-sizing: border-box;

    margin: 30vh 20vw 0%;
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    float: right;
  
  textarea{
    width: 300px;
    height: 100px;
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

  

  select{
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

  option{
    position: center;
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

  h2{
    margin: 5px 10px;
    text-align: center;
    font-family: Geneva, Verdana, sans-serif;
    color: #3B0071;
    font-size: 30px;
  }


  .cadastrese{
    display: flex;
    display: flex;
    justify-content: space-between;
    vertical-align: bottom;
    margin: 0 15px;
  }

  
  button {
    width: 200px;
    height: 60px;
    background-color: #3B0071 ;
    border-radius: 3px;
    border: none;
    color: #fff;
    transition: all 300ms;
    margin: 15px 22%;
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
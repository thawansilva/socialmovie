import styled from "styled-components";

export const Form = styled.form`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8.5px);
  border: 1.5px #333 solid;
  width: 225px;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  margin: 0 auto;
  margin-top: 0.5em;
  button {
    padding: 5px;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
  }
  input {
    width: 95%;
    margin-bottom: 0;
    height: 30px;
    padding: 5px;
    border-radius: 3px;
    border: none;
    &:focus {
      outline: none;
    }
  }

  @media screen and (min-width: 620px) {
    min-width: 350px;
    grid-column: 6/12;
  }
  @media screen and (min-width: 960px) {
  }
  @media screen and (min-width: 1200px) {
  }
`;

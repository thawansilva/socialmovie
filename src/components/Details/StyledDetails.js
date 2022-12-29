import styled from "styled-components";

export const StyledMainInfo = styled.div`
  position: relative;
  background: url(${({ bgImage }) => bgImage});
  background-color: #222;
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 25px;
  padding: 20px 0;
  min-height: 90vh;
  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledDetails = styled.div`
  position: relative;
  color: #333;
  padding-bottom: 30px;
  h2 {
    font-size: 2.75rem;
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
  }
  @media screen and (min-width: 960px) {
    h2 {
      text-align: left;
    }
  }
`;

export const StyledMovieInformation = styled.div`
  text-align: center;
  margin: 30px 0;
  width: 30%;
  margin: 0 auto;
  h3 {
    font-size: 1.75rem;
  }
  p {
    font-size: 1.25rem;
  }
  div + div {
    margin-top: 15px;
  }
  @media screen and (min-width: 960px) {
    text-align: left;
    margin-left: 10px;
  }
`;

export const StyledOtherInformation = styled.div`
  .cast {
    width: 100%;
    text-align: center;
  }
  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: space-between;

    h2 {
      text-align: left;
    }
    .cast {
      width: 80%;
    }
  }
`;

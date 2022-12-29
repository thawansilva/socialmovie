import styled from "styled-components";

export const AboutMovieStyled = styled.div`
  padding: 25px 0px;
  color: ${({ theme: { colors } }) => colors.body};
  text-align: center;
  h1,
  h3 {
    color: #eee;
  }
  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 2rem;
    margin-top: 15px;
  }
  .releaseDate,
  .runtime,
  .genre {
    font-size: 1.25rem;
    font-weight: 600;
  }
  .rate {
    position: absolute;
    border-radius: 100%;
    padding: 7px 5px;
    background: #333;
    font-size: 1.2rem;
    left: 15%;
    top: 2.5%;
    font-weight: bold;
  }
  .sm-details {
    display: flex;
  }
  @media screen and (min-width: 960px) {
    .releaseDate,
    .runtime,
    .genre {
      display: inline;
    }
    .rate {
      left: 1%;
      top: 1%;
    }
    text-align: left;
    margin-top: 0;
    margin-left: 20px;
  }
`;
export const StyledImageMovie = styled.div`
  width: 75%;
  margin: 0 auto;
  @media screen and (min-width: 960px) {
    margin: auto;
    img {
      position: relative;
      width: 300px;
    }
  }
`;

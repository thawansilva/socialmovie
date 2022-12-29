import styled from "styled-components";

export const StyledCastCard = styled.div`
  border-radius: 5px;
  min-height: 350px;
  max-width: 225px;
  background: #fff;
  grid-column: span 6;
  transition: all 0.3s;
  color: #222;
  position: relative;
  text-align: left;
  margin: 5px 0 30px 0px;
  a > h4 {
    color: #333;
    transition: all 0.2s;

    &:hover {
      color: #c22c2c;
    }
  }
  p {
    margin-top: 5px;
    color: #aaa;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  div {
    margin: 0 10px 10px 10px;
  }

  @media screen and (min-width: 620px) {
    grid-column: span 4;
  }
  @media screen and (min-width: 960px) {
    grid-column: span 3;
  }
  @media screen and (min-width: 1200px) {
    min-height: ${({ type }) => type && "200px"};
    max-width: ${({ type }) => type && "175px"};
  }
`;

export const StyledCard = styled(StyledCastCard)`
  margin: 20px 0;
  p {
    font-size: 1rem;
  }

  .rate {
    position: absolute;
    border-radius: 100%;
    padding: 7px;
    width: 45px;
    background: #333;
    top: 0.2em;
    font-weight: bold;
    font-size: 0.8em;
  }
  @media screen and (min-width: 1200px) {
    min-height: 350px;
    max-width: 250px;
  }
`;

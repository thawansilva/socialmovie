import styled from "styled-components";

export const StyledPersonData = styled.div`
  text-align: center;
  margin-top: 20px;
  .informations > div {
    margin-bottom: 5px;
  }
  h1 {
    font-size: 3rem;
    margin: 10px 0;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    margin: 20px 0 10px 0;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.25rem;
  }

  .biography {
    margin-top: 25px;
  }
  @media screen and (min-width: 620px) {
    img {
      width: 475px;
    }
  }
  @media screen and (min-width: 960px) {
    img {
      width: 350px;
    }
    text-align: left;
    .biography,
    .name {
      display: none;
    }
  }
`;

export const StyledKnownFor = styled.div`
  .biography,
  .name {
    display: none;
  }
  .works {
    margin: 20px 0;
  }
  text-align: center;
  @media screen and (min-width: 960px) {
    width: 60%;
    .name {
      margin: 30px 0 10px 0;
    }
    .biography,
    .name {
      text-align: left;
      display: block;
    }
  }
`;
export const StyledInfo = styled.div`
  @media screen and (min-width: 960px) {
    display: flex;
    gap: 20px;
  }
`;

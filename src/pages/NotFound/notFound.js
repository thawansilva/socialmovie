import styled from "styled-components";

export const StyledNotFound = styled.div`
  padding: 4em 0;
  text-align: center;
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.25rem;
  }
  img {
    margin-top: 30px;
    width: 400px;
  }
  a {
    color: #333;
    font-weight: bold;
    &:hover {
      color: ${({ theme: { colors } }) => colors.ui};
    }
  }

  @media screen and (min-width: 960px) {
    display: flex;
    justify-items: center;
    justify-content: space-around;
    text-align: left;
    padding: 6em 0;
    h2 {
      font-size: 4rem;
    }
    p {
      font-size: 1.5rem;
    }
    img {
      margin: 0;
    }
  }
`;

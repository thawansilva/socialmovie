import styled from "styled-components";

export const StyledFooter = styled.div`
  padding: 1.25em 0em;
  background: #c22c2c;
  text-align: center;
  font-size: 1.125rem;
  .tmdb {
    font-size: 1rem;
  }
  a {
    color: ${({ theme: { colors } }) => colors.body};
    transition: 0.3s ease;
    &:hover {
      color: #333;
    }
  }
`;

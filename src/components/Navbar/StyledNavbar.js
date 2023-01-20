import styled from "styled-components";

export const StyledNavbar = styled.div`
  background: #c22c2c;
  position: sticky;
  z-index: 10;
  top: 0;
  padding: 0.5em;

  h3 {
    color: #eee;
    text-transform: uppercase;
  }

  a {
    color: #eee;
    font-weight: bold;
  }

  .linkPerson {
    margin-right: 30px;
    transition: all 0.5;
    &:hover {
      color: ${({ theme: colors }) => colors.bg};
    }
  }
`;

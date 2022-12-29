import styled from "styled-components";

export const StyledPagination = styled.div`
  margin: 0 auto;
  margin-bottom: 10px;
  width: 300px;
  color: #333;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
  @media screen and (min-width: 620px) {
    margin: 0;
    width: 60%;
    text-align: left;
    .pagination {
      display: flex;
      justify-content: space-between;
    }
  }
`;

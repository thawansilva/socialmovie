import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
`;

export const ContainerInfoDetails = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;
  @media screen and (min-width: 960px) {
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`;

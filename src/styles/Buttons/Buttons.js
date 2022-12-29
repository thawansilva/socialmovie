import styled from "styled-components";

export const StyledShowMore = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-size: 1.125rem;
  margin: 20px 0;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    color: ${({ theme: { colors } }) => colors.ui};
  }
`;

export const StyledButton = styled.button`
  background: ${({ isActive, theme: { colors } }) => isActive && colors.ui};
  color: ${({ isActive, theme: { colors } }) => isActive && colors.body};
  padding: 9px 6px;
  font-weight: bold;
  font-size: 1.125rem;
  outline: none;
  border: 1px #333 solid;
`;

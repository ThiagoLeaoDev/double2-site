import styled from "styled-components"

export const PrevImage = styled.img`
  margin-left: 50px;
  margin-bottom: 200px;
  opacity: 0.6;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
`;

export const NextImage = styled(PrevImage)`
  margin-right: 50px;
`;

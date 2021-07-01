import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentHome = styled.div`
  width: 100vw;
  max-width: 1500px;
  align-self: center;
`;

export const ContainerLine = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContainerLineLink = styled.a`
  cursor: pointer;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TextLineLink = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  opacity: 0.6;
  cursor: pointer;

  &:hover{
    opacity: 1;
  }
`;
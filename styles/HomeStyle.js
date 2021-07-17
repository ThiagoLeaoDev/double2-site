import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentHome = styled.div`
  width: 100vw;
  max-width: 1400px;
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
  opacity: 0.6;
  align-items: center;
    &:hover{
    opacity: 1;
  }
`;

export const TextLineLink = styled.h6`
  font-weight: bold;
  cursor: pointer;
`;
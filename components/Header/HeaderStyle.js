
import styled from "styled-components"
import Image from 'next/image'

export const Tabbar = styled.header`
  position: fixed;
  z-index: 10;
  background-color: var(--black);
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerLogo = styled.div`
  margin-left: 40px;
`;

export const ContainerHamburger = styled.div`
  display: none;
  margin-right: 40px;
  cursor: pointer;
  @media (max-width: 1007px) {
    display: block;
  }
`;

export const IconDouble = styled(Image)`
`;

export const ContainerOptions = styled.div`
  height: 40%;
  width: 35%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1007px) {
    display: ${props => props.open ? "none" : "block"};
    position: absolute;
    width: 28%;
    min-width: 200px;
    height: auto;
    flex-direction: column;
    background-color: var(--black);
    top: 90px;
    right: 0;
    border-bottom-left-radius: 6px;
  }
`;

export const TabOption = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1007px) {
    height: 60px;
    border-top: 2px solid #2f2f30;
    justify-content: space-around;
  }
`;

export const TextOption = styled.p`
  color: var(--white);
  font-weight: bold;
  &:hover{
    color: var(--pastel-yellow);
  }
`;

export const ContainerIcons = styled.div`
  width: 11%;
  max-width: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 40px;
  @media (max-width: 1007px) {
    display: none;
  }
`;


export const HoverIcon = styled.a`
`;


export const Linha = styled.img`
  width: 100%;
`;
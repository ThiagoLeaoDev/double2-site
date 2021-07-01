import styled from "styled-components"
import Image from "next/image"

export const Content = styled.div`
  position: relative;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PrevImage = styled(Image)`
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

export const ContainerImage = styled.div`
  height: auto;
  width: 100%;
`;

export const BannerImage = styled(Image)`
`;
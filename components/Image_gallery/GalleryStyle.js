import styled from "styled-components"
import Image from 'next/image'

export const ContentGallery = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: row;

  @media(max-width: 992px) {
    width: 100%;
  }
`;

export const LeftImages = styled.div`
  width: 25%;
  min-width: 130px;
  max-height: 100%;
  height: 60vw;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar{
    width: 8px;
  }
`;

export const BoxMiniImage = styled.div`
  position: relative;
  width: 95%;
  height: 200px;
  align-self: center;
  margin-bottom: 20px;

  &:last-child{
    margin-bottom: 0;
  }

`;

export const MiniImage = styled(Image)`
`;


export const FullImage = styled.div`
  position: relative;
  background-color: green;
  max-height: 100%;
  height: 60vw;
  min-height: 450px;
  width: 520px;
`;
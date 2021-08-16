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

  &:hover{
    cursor: pointer;  
  }

  &:last-child{
    margin-bottom: 0;
  }

`;

export const MiniImage = styled(Image)`
`;


export const FullImage = styled.div`
  position: relative;
  max-height: 100%;
  height: 60vw;
  min-height: 450px;
  width: 520px;

  &:hover{
    cursor: zoom-in;  
  }
`;

//MODAL AREA

export const ModalArea = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.8;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const BoxModalImage = styled.div`
  z-index: 1;
  position: absolute;
  width: 30%;
  height: 85%;
  left: 35%;
  top: 100px;
`;

export const ModalImage = styled(Image)`
`;
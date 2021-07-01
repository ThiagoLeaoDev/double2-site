import styled from "styled-components"
import {motion} from "framer-motion"


export const CardProduct = styled.div`
  width: 300px;
  margin-left: 28px;
  margin-right: 28px;
  margin-bottom: 40px;
  &:hover{
    cursor: pointer;
  }
`;


export const NewFlag = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px;
`;

export const ImageFlag = styled.img`
`;

export const TextFlag = styled.p`
  font-size: 12px;
  position: absolute;
  text-orientation: upright;
  writing-mode: vertical-lr;
  font-weight: bold;
  color: var(--white);
  letter-spacing: -4px;
  top: 5px;
`;

export const ContainerHeart = styled.a`
  position: absolute;
  margin-left: 260px;
`;

export const Heart = styled.img`
  height: 40px;
  width: 40px;
  fill: white;
`;

export const SaleFlag = styled.div`
  position: absolute;
  width: 24px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #EA8E8E;
  margin-left: 270px;
  margin-top: 324px;
`;

export const TextSale = styled.p`
  writing-mode: vertical-rl;
  font-size: 12px;
  color: var(--white);
  font-weight: bold;
`;

export const ContainerButtons = styled(motion.div)`
  position: absolute;
  width: 300px;
  margin-top: 395px;
  height: 65px;
  transition: display 1s ease;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.4);
`;


export const ButtonView = styled.div`
  background-color: var(--black);
  width: 128px;
  height: 39px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  &:hover{
    opacity: 0.8;
  }
`;

export const ButtonProductText = styled.p`
  font-size: 12px;
  height: 12px;
  color: var(--white);
`;

export const ButtonBuy = styled(ButtonView)`
  background-color: var(--pastel-yellow);
`;

export const ImageProduct = styled.img`
  width: 300px;
  height: 460px;
`;

export const ContainerText = styled.div`
  margin-top: 6px;
  margin-left: 5px;
`;

export const ProductTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: var(--black);
  line-height: 22px;
`;

export const ProductDiscount = styled.p`
font-size: 1rem;
  text-decoration: line-through;
  font-weight: 600;
  color: var(--light-grey);
  margin-top: 5px;
`;

export const ProductValue = styled.p`
font-size: 1rem;
  font-weight: 600;
  color: var(--light-grey);
  margin-top: 6px;
`;
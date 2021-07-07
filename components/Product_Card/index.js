import React, { useState } from 'react'; 

import { IconContext } from "react-icons";
import { BiHeart } from "react-icons/bi";
import { AnimatePresence } from "framer-motion"


import * as SC from "./ProductCardStyle"

export default function Index(props) {
  const [Hover, setHover] = useState(false);
  
  return (
    <SC.CardProduct
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <SC.NewFlag>
        <SC.ImageFlag src="/new_flag.svg" width={30} height={68}/>
        <SC.TextFlag>new</SC.TextFlag>
      </SC.NewFlag>

      <SC.ContainerHeart href="#">
          <BiHeart size="2.5em" color="var(--grey)"/>
      </SC.ContainerHeart>

      <SC.SaleFlag>
        <SC.TextSale>{props.offer}% off</SC.TextSale>
      </SC.SaleFlag>
      <AnimatePresence>
        {
          Hover && (
            //initial estado inicial, animate estado final da animação,
            //exit quando o componente for desmontado
            <SC.ContainerButtons
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.2}}>
              <SC.ButtonView href="#">
                <SC.ButtonProductText>Visualizar produto</SC.ButtonProductText>
              </SC.ButtonView>
              <SC.ButtonBuy  to={props.linkProduct}>
                <SC.ButtonProductText>Comprar agora</SC.ButtonProductText>
              </SC.ButtonBuy>
            </SC.ContainerButtons>
          )
        }
      </AnimatePresence>

      <SC.ImageProduct src={props.image} width={300} height={460}/>

      <SC.ContainerText>
        <SC.ProductTitle>{props.name}</SC.ProductTitle>
        <SC.ProductDiscount>R$ {props.value}</SC.ProductDiscount>
        <SC.ProductValue>R$ {props.discount}</SC.ProductValue>
      </SC.ContainerText>
      
    </SC.CardProduct>
  )
}

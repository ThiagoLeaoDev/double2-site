import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import * as SC from "../styles/ProductStyle";

import Header from '../components/Header'
import Gallery from '../components/Image_gallery'
import MobileGallery from '../components/Image_gallery_mobile'
import Data from "../components/Data.json"

import { FaRegStar, FaStar } from "react-icons/fa";

export default function product() {
  const [width, setWidth] = React.useState(0);
  const router = useRouter();
  const { query : { id, name } } = router

  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return (
    <SC.Main>
      <Head>
        <title>Double2 | Produto</title>
      </Head>
      <Header/>
      {
        Data.Product.map((product, index) => {
          if(id==index){
            return(
              <SC.Content>
                <SC.ContainerImagesDesc>
                  {
                    width > 992 ?
                      <Gallery passImage={product.image}/>
                    :
                    <MobileGallery passImage={product.image}/>
                  }
                  <SC.ContainerDesc>
                    <SC.TitleProduct>{product.name}</SC.TitleProduct>
                    <SC.TextCod>Cód. Ref. P {index}</SC.TextCod>
                      <SC.ContainerStars>
                        <SC.ContainerIcons>
                          <FaRegStar
                            color={"var(--pastel-yellow)"}
                            size="1.75rem"
                            backgroundColor={"var(--pastel-yellow)"}
                          />
                          <FaRegStar
                            color={"var(--pastel-yellow)"}
                            size="1.75rem"
                            backgroundColor={"var(--pastel-yellow)"}
                          />
                          <FaRegStar
                            color={"var(--pastel-yellow)"}
                            size="1.75rem"
                            backgroundColor={"var(--pastel-yellow)"}
                          />
                          <FaRegStar
                            color={"var(--pastel-yellow)"}
                            size="1.75rem"
                            backgroundColor={"var(--pastel-yellow)"}
                          />
                          <FaRegStar
                            color={"var(--pastel-yellow)"}
                            size="1.75rem"
                            backgroundColor={"var(--pastel-yellow)"}
                          />
                      </SC.ContainerIcons>
                      <SC.TextAvaliacoes>(13 Avaliações)</SC.TextAvaliacoes>
                    </SC.ContainerStars>
                    <SC.ContainerPrice>
                      <SC.TextDiscount>R$ {product.value.toFixed(2)}</SC.TextDiscount>
                      <SC.TextPrice>R$ {(product.value-(product.value*(product.offer/100))).toFixed(2)} </SC.TextPrice>
                    </SC.ContainerPrice>
                    <SC.Divisor/>
                    <SC.ContainerSizes>
                      <SC.TitleSize>Tamanho</SC.TitleSize>
                      <SC.ContainerCircles>
                        {
                          product.sizes.map((sizes, index) => {
                            if(sizes.available == true){
                              return(
                                <SC.CircleSize key={index}>
                                  <SC.TextSize>{sizes.letter}</SC.TextSize>
                                </SC.CircleSize>
                              )
                            }
                            else{
                              return(
                                <SC.CircleSizeDisabled key={index}>
                                  <SC.TextSize>{sizes.letter}</SC.TextSize>
                                </SC.CircleSizeDisabled>
                              )
                            }
                          })
                        }
                      </SC.ContainerCircles>
                    </SC.ContainerSizes>
                    <SC.ContainerQuantity>
                      <SC.TextQuantity>Quantidade</SC.TextQuantity>
                      <SC.SelectorQuantity>
                        <SC.SelectorOption>1</SC.SelectorOption>
                        <SC.SelectorOption>2</SC.SelectorOption>
                        <SC.SelectorOption>3</SC.SelectorOption>
                        <SC.SelectorOption>4</SC.SelectorOption>
                      </SC.SelectorQuantity>
                    </SC.ContainerQuantity>
                    <SC.ButtonBuy>Comprar agora</SC.ButtonBuy>
                    {/* <SC.ContainerShipping>
                      <SC.TitleCalc>Calcule o frete</SC.TitleCalc>
                      <SC.ContainerInputButton>
                        <SC.InputCalc placeholder="CEP"></SC.InputCalc>
                        <SC.ButtonCalc>OK</SC.ButtonCalc>
                      </SC.ContainerInputButton>
                    </SC.ContainerShipping>
                    <SC.ContainerShippingInfos>
                      <SC.TextAddress>Rua Monte Plano, Vila Margarida - Sao Vicente, SP</SC.TextAddress>
                      <SC.ContainerShippingPrice>
                        <SC.TitleShipping>Jadlog - Normal - de 1 a 5 dias úteis</SC.TitleShipping>
                        <SC.TextShippingPrice>R$47,32</SC.TextShippingPrice>
                      </SC.ContainerShippingPrice>
                    </SC.ContainerShippingInfos> */}
                  </SC.ContainerDesc>
                </SC.ContainerImagesDesc>

                <SC.ContainerDescRating>
                  <SC.ContainerOptions>
                    <SC.ContainerTextOption>
                      <SC.TextOption>Descrição</SC.TextOption>
                    </SC.ContainerTextOption>
                    <SC.ContainerTextOption>
                      <SC.TextOptiondisable>Avaliações</SC.TextOptiondisable>
                    </SC.ContainerTextOption>
                  </SC.ContainerOptions>
                  <SC.DivisorDesc/>
                  <SC.ContainerTextDesc>
                    <SC.TextDesc>DESCRICAO</SC.TextDesc>
                    <br/>
                    <SC.TextDesc>Modelo masculino: 1,81 cm e veste o tamanho M.</SC.TextDesc>
                    <SC.TextDesc>Modelo feminino: 1,72 cm e veste o tamanho P.</SC.TextDesc>
                    <br/>
                    <SC.TextDesc>Confira a tabela de medidas do produto e o nosso provador online.</SC.TextDesc>
                    <br/>
                    <SC.TextDesc>Detalhes do produto:</SC.TextDesc>
                    <SC.TextDesc>Tecido 100% algodão. Modelagem slim com manga curta, gola careca e bordado no peito.</SC.TextDesc>
                    <br/>
                    <SC.TextDesc>Instruções de lavagem:</SC.TextDesc>
                    <SC.TextDesc>- Lavar com água em temperatura ambiente</SC.TextDesc>
                    <SC.TextDesc>- Não usar alvejantes.</SC.TextDesc>
                    <SC.TextDesc>- Não usar secadora.</SC.TextDesc>
                    <SC.TextDesc>- Passar em temperatura mínima.</SC.TextDesc>
                    <SC.TextDesc>- Não passar a ferro a estampa.</SC.TextDesc>
                    <SC.TextDesc>- Não limpar a seco.</SC.TextDesc>
                  </SC.ContainerTextDesc>
                </SC.ContainerDescRating>
              </SC.Content>
            )
          }
        })
      }
    </SC.Main>
  )
}

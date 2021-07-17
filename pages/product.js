import  {useState, useEffect}from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head'

import { FaRegStar, FaStar } from "react-icons/fa";

import * as SC from "../styles/ProductStyle"

import Header from '../components/Header'
import Data from '../components/Data.json'

export default function Product() {
  const [Zoom, setZoom] = useState(false);

  const router = useRouter();
  const { query : { id, name } } = router

  let teste = [0, 1, 2, 3, 4];

  return (
    <div id="app">
      <Head>
        <title>{name}</title>
      </Head>
      <Header/>
      {
        Data.Product.map((product, index) => {
          if(id==index){
            return(
              <SC.ContainerContent>
                <SC.ContainerImages>
                  <SC.ContainerLeftImages>
                    {
                      product.image.map((img, index) => {
                        console.log(img)
                        return(
                          <SC.ContainerMiniImage>
                            <SC.MiniImage src={img} key={index} layout='fill' objectFit="cover" quality={15}/>
                          </SC.ContainerMiniImage>
                        );
                      })
                    }
                  </SC.ContainerLeftImages>
                  <SC.ContainerSelectedImage>
                    <SC.SelectedImage src={"/IMG_0006.jpg"} layout='fill' objectFit="cover" quality={15}/>
                  </SC.ContainerSelectedImage>
                </SC.ContainerImages>
                <SC.ContainerProdInfos>
                  <SC.TitleProduct>{product.name}</SC.TitleProduct>
                  <SC.TextCod>Cód. Ref. P {index}</SC.TextCod>
                  <SC.ContainerStars>
                    {
                      teste.map((elemento, index) => {
                        return(
                          <FaRegStar
                          key={index}
                          color={"var(--pastel-yellow)"}
                          size="2rem"
                          backgroundColor={"var(--pastel-yellow)"}/>
                        );
                      })
                    }
                    <SC.TextAvaliacoes>(13 Avaliações)</SC.TextAvaliacoes>
                  </SC.ContainerStars>
                  <SC.ContainerPrice>
                    <SC.TextDiscount>R$ {product.value.toFixed(2)}</SC.TextDiscount>
                    <SC.TextPrice>R$ {(product.value-(product.value*(product.offer/100))).toFixed(2)}</SC.TextPrice>
                  </SC.ContainerPrice>
                  <SC.Divisor/>
                  <SC.TitleSize>Tamanho</SC.TitleSize>
                  <SC.ContainerSizes>
                    <SC.CircleSize>
                      <SC.TextSize>PP</SC.TextSize>
                    </SC.CircleSize>
                    <SC.CircleSize>
                      <SC.TextSize>P</SC.TextSize>
                    </SC.CircleSize>
                    <SC.CircleSize>
                      <SC.TextSize>M</SC.TextSize>
                    </SC.CircleSize>
                    <SC.CircleSize>
                      <SC.TextSize>G</SC.TextSize>
                    </SC.CircleSize>
                    <SC.CircleSize>
                      <SC.TextSize>GG</SC.TextSize>
                    </SC.CircleSize>
                    <SC.CircleSize>
                      <SC.TextSize>XG</SC.TextSize>
                    </SC.CircleSize>
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
                  <SC.ContainerButtons>
                    <SC.ButtonBuy>Comprar agora</SC.ButtonBuy>
                    <SC.ButtonAddWallet>Adicionar ao carrinho</SC.ButtonAddWallet>
                  </SC.ContainerButtons>
                  <SC.ContainerShipping>
                    <SC.TitleCalc>Calcule o frete</SC.TitleCalc>
                    <SC.InputCalc placeholder="CEP"></SC.InputCalc>
                    <SC.ButtonCalc>OK</SC.ButtonCalc>
                  </SC.ContainerShipping>
                  <SC.ContainerShippingInfos>
                    <SC.TextAddress>Rua Monte Plano, Vila Margarida - Sao Vicente, SP</SC.TextAddress>
                    <SC.ContainerShippingPrice>
                      <SC.TitleShipping>Jadlog - Normal - de 1 a 5 dias úteis</SC.TitleShipping>
                      <SC.TextShippingPrice>R$47,32</SC.TextShippingPrice>
                    </SC.ContainerShippingPrice>
                  </SC.ContainerShippingInfos>
                </SC.ContainerProdInfos>
              </SC.ContainerContent>
            )
          }
        })
      }

      <SC.ContainerDescRating>
        <SC.ContainerOptions>
          <SC.TextOption>Descrição</SC.TextOption>
          <SC.TextOption>Avaliações</SC.TextOption>
        </SC.ContainerOptions>
        <SC.DivisorDesc/>
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
      </SC.ContainerDescRating>
    </div>
  );
}

import Link from 'next/link'
import Head from 'next/head'

import * as SC from "../styles/ProductStyle";

import Header from '../components/Header'
import Gallery from '../components/Image_gallery'

import { FaRegStar, FaStar } from "react-icons/fa";

export default function product() {
  return (
    <SC.Main>
      <Head>
        <title>Double2 | Produto</title>
      </Head>
      <Header/>
      <SC.Content>
        <SC.ContainerImagesDesc>
          <Gallery/>
          <SC.ContainerDesc>
            <SC.TitleProduct>CAMISETA REGULAR DOUBLE² ALTERNATIVE AMARELA</SC.TitleProduct>
            <SC.TextCod>Cód. Ref. C 8843</SC.TextCod>
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
              <SC.TextDiscount>R$ 59,99</SC.TextDiscount>
              <SC.TextPrice>R$ 49,99</SC.TextPrice>
            </SC.ContainerPrice>
            <SC.Divisor/>
            <SC.ContainerSizes>
              <SC.TitleSize>Tamanho</SC.TitleSize>
              <SC.ContainerCircles>
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
              <SC.TextOption>Avaliações</SC.TextOption>
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
    </SC.Main>
  )
}

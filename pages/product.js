import  {React, useState}from 'react'
import { FaRegStar, FaStar } from "react-icons/fa";

import * as SC from "../styles/ProductStyle"
import GlobalStyles from "../styles/Global"

import Header from '../../components/Header'

import Image1 from '../../assets/IMG_0001.jpg';
import Image2 from '../../assets/IMG_0002.jpg';
import Image3 from '../../assets/IMG_0003.jpg';
import Image4 from '../../assets/IMG_0004.jpg';
import Image5 from '../../assets/IMG_0005.jpg';
import Image6 from '../../assets/IMG_0006.jpg';


function App() {
  const [Zoom, setZoom] = useState(false);
  let teste = [0, 1, 2, 3, 4];
  return (
    <div id="app">
      <GlobalStyles/>
      <Header/>

      <SC.ContainerContent>
        <SC.ContainerImages>
          <SC.ContainerLeftImages>
            <SC.MiniImage src={Image1}/>
            <SC.MiniImage src={Image2}/>
            <SC.MiniImage src={Image3}/>
            <SC.MiniImage src={Image4}/>
            <SC.MiniImage src={Image5}/>
          </SC.ContainerLeftImages>
          <SC.SelectedImage src={Image6} />
        </SC.ContainerImages>
        <SC.ContainerProdInfos>
          <SC.TitleProduct>CAMISETA REGULAR DOUBLE² ALTERNATIVE AMARELA</SC.TitleProduct>
          <SC.TextCod>Cód. Ref. C 8843</SC.TextCod>
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
            <SC.TextDiscount>R$ 59,99</SC.TextDiscount>
            <SC.TextPrice>R$ 49,99</SC.TextPrice>
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

      <SC.ContainerDescRating>
        <SC.ContainerOptions>
          <SC.TextOption>Descrição</SC.TextOption>
          <SC.TextOption>Avaliações</SC.TextOption>
        </SC.ContainerOptions>
        <SC.DivisorDesc/>
        <SC.TextDesc>Clássica e atemporal.</SC.TextDesc>
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

export default App;

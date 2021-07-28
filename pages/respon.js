
import * as SC from "../styles/ResponStyle";

import Header from '../components/Header'

import { FaRegStar, FaStar } from "react-icons/fa";

export default function respon() {
  return (
    <SC.Main>
      <Header/>
      <SC.Content>
        <SC.ContainerImagesDesc>
          <SC.ContainerImages>

          </SC.ContainerImages>
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
          </SC.ContainerDesc>
        </SC.ContainerImagesDesc>
      </SC.Content>
    </SC.Main>
  )
}

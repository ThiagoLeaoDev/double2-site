import styled from "styled-components";

export const ContainerContent = styled.div`
  padding-top: 160px;
  width: 100%;
  height: 610px;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const ContainerImages = styled.div`
  width: 25vw;
  height: 100%;
  margin-left: 16%;
  display: flex;
  flex-direction: row;
`;

export const ContainerLeftImages = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar{
    width: 8px;
  }
`;

export const MiniImage = styled.img`
  width: 100%;
  max-width: 140px;
  margin: 0px 20px 20px 0px;
`;

export const SelectedImage = styled.img`
  width: 70%;
  &:hover{
    cursor: zoom-in;
  }
`;

export const ContainerProdInfos  = styled.div`
  width: 50vw;
  height: 100%;
  padding-left: 40px;
  padding-right: 40px;
`;

export const TitleProduct  = styled.p`
  font-weight: bold;
  font-size: 1.625rem;
  margin-bottom: 13px;
  width: 48%;
`;

export const TextCod  = styled.p`
  font-size: 1.125rem;
  color: var(--text-grey);
  margin-bottom: 15px;
`;

export const ContainerStars  = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 26%;
  margin-left: -5px;
  margin-bottom: 30px;
`;

export const TextAvaliacoes  = styled.p`
  margin-top: 3px;
  color: var(--text-grey);
`;

export const ContainerPrice  = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 18.5%;
  margin-bottom: 30px;
`;

export const TextDiscount  = styled.p`
  font-size: 1.125rem;
  color: var(--text-grey);
  text-decoration: line-through;
`;

export const TextPrice  = styled.p`
  font-size: 1.875rem;
  font-weight: bold;
`;

export const Divisor  = styled.div`
  width: 48%;
  border-top: 1px solid #C4C4C4;
`;

export const TitleSize  = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const ContainerSizes  = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const CircleSize  = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--black);
  opacity: 0.45;
    &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;
export const TextSize  = styled.p`
  font-weight: bold;
  color: var(--white);
`;

export const ContainerQuantity  = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const TextQuantity  = styled.div`

`;

export const SelectorQuantity  = styled.select`
  width: 100px;
  padding: 4px;
  border-radius: 4px; 
  border-color: var(--light-grey);
  font-family: 'Poppins', sans-serif;
`;

export const SelectorOption  = styled.option`
  font-family: 'Poppins', sans-serif;
  color: var(--black);
`;


export const ContainerButtons  = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ButtonBuy  = styled.button`
  width: 220px;
  border-radius: 10px;
  background-color: var(--pastel-yellow);
  border: none;
  padding: 10px 20px 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
  font-family: 'Poppins', sans-serif;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ButtonAddWallet  = styled(ButtonBuy)`
  font-weight: normal;
  background-color: var(--black);
`;

export const ContainerShipping  = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const TitleCalc  = styled.p`
`;

export const InputCalc  = styled.input`
  border: 1px solid var(--light-grey);
  border-radius: 4px;
  padding: 4px 8px;
  font-family: 'Poppins', sans-serif;
  color: var(--black);
  appearance: none;
`;

export const ButtonCalc  = styled.button`
  border-radius: 4px;
  background-color: var(--black);
  border: none;
  padding: 2px 15px 2px 15px;
  font-size: 1rem;
  color: var(--white);
  font-family: 'Poppins', sans-serif;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ContainerShippingInfos  = styled.div`
  width: 37%;
  display: flex;
  flex-direction: column;
  background-color: #E5E5E5;
  padding: 10px 20px 30px 20px;
  border-radius: 10px;
`;

export const TextAddress  = styled.p`
  font-size: 0.75rem;
  color: var(--text-grey);
`;

export const ContainerShippingPrice  = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;


export const TitleShipping  = styled.picture`
  font-weight: 500;
`;

export const TextShippingPrice  = styled.p`
  font-weight: bold;
  color: var(--green);
`;

export const ContainerDescRating  = styled.div`
  margin-bottom: 30px;
`;

export const ContainerOptions  = styled.div`
  width: 190px;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TextOption  = styled.p`
  font-weight: 500;
  color: var(--text-grey);
`;

export const DivisorDesc  = styled(Divisor)`
  width: 100%;
  margin-bottom: 25px;
`;

export const TextDesc  = styled.p`
  width: 40%;
  margin-left: 10%;
  text-align: left;
  color: var(--text-grey);
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 2px;
`;
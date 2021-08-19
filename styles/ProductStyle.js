import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100vw;
  max-width: 1400px;
  margin-top: 90px;
  margin-bottom: 240px;
  padding-top: 50px;

  @media(max-width: 992px) {
    padding-top: 0px
  }
`;

export const ContainerImagesDesc = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 40px;

    @media(max-width: 992px) {
    margin: 0px
  }
`;

export const ContainerDesc = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  
  @media(max-width: 992px) {
    width: 100%;
  }
`;

export const TitleProduct  = styled.h4`
  font-weight: bold;
  margin: 0 30px 4px 30px;
`;

export const TextCod  = styled.h5`
  color: var(--text-grey);
  margin: 0 30px 8px 30px;
`;

export const ContainerStars  = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px 20px 30px;

  @media(max-width: 576px) {
    width: 200px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContainerIcons  = styled.div`
  width: 55%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 576px) {
    width: 100%;
  }
`;

export const TextAvaliacoes  = styled.h6`
  margin-top: 3px;
  color: var(--text-grey);
`;

export const ContainerPrice  = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px 24px 30px;
`;

export const TextDiscount  = styled.h6`
  color: var(--text-grey);
  text-decoration: line-through;
`;

export const TextPrice  = styled.h3`
  font-weight: bold;
`;

export const Divisor  = styled.div`
  position: relative;
  width: 90%;
  border-top: 2px solid var(--text-light-grey);
  opacity: 0.3;
  margin: 0 30px 20px 30px;
  align-self: center;
`;

export const ContainerSizes  = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin: 0 30px 28px 30px;
`;

export const TitleSize  = styled.h4`
  font-weight: bold;
  margin-bottom: 15px;
`;

export const ContainerCircles  = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CircleSize  = styled.div`
  width: 35px;
  height: 35px;
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

export const CircleSizeDisabled  = styled(CircleSize)`
  background-color: var(--light-grey);
    &:hover{
    cursor: default;
    opacity: 0.45;
  }
`;

export const TextSize  = styled.h6`
  font-weight: bold;
  color: var(--white);
`;

export const ContainerQuantity  = styled.div`
  width: 280px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px 24px 30px;
`;

export const TextQuantity  = styled.h5`
  font-weight: 500;
`;

export const SelectorQuantity  = styled.select`
  width: 50%;
  padding: 4px;
  border-radius: 4px;
  border: 2px solid var(--light-grey);
  font-family: 'Poppins', sans-serif;
`;

export const SelectorOption  = styled.option`
  font-family: 'Poppins', sans-serif;
  color: var(--black);
`;

export const ButtonBuy  = styled.button`
  width: 230px;
  border-radius: 10px;
  background-color: var(--pastel-yellow);
  border: none;
  padding: 10px 20px 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
  font-family: 'Poppins', sans-serif;
  margin: 0 30px 24px 30px;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }

  @media(max-width: 992px) {
    position: absolute;
    width: 100vw;
    bottom: 0;
    margin: 0;
    position:fixed;
    z-index:100;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;

    &:hover{
      cursor: pointer;
      opacity: 1;
    }
  }
`;

export const ContainerShipping  = styled.div`
  max-width: 400px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px 24px 30px;

  @media(max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TitleCalc  = styled(TextQuantity)`
  @media(max-width: 992px) {
    margin-bottom: 8px;
  }
`;

export const ContainerInputButton  = styled.div`
  width: 240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  width: 75%;
  max-width: 630px;
  display: flex;
  flex-direction: column;
  background-color: #E5E5E5;
  padding: 10px 20px 30px 20px;
  border-radius: 10px;
  margin: 0 30px 24px 30px;
`;

export const TextAddress  = styled.h5`
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

export const ContainerDescRate  = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerDescRating  = styled.div`
`;

export const ContainerOptions  = styled.div`
  width: 210px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 30px 10px 20px;
`;

export const ContainerTextOption  = styled.div`
`;

export const TextOption  = styled.p`
  font-weight: 500;
  color: var(--text-grey);
  padding: 10px;
  cursor: pointer;

  &:hover{
    color: var(--text-black);
  }
`;

export const TextOptiondisable  = styled(TextOption)`
  color: var(--text-light-grey);

  &:hover{
    color: var(--text-light-grey);
  }
`;

export const DivisorDesc  = styled(Divisor)`
  max-width: 1400px;
  width: 100%;
  margin: 0;
  margin-bottom: 30px;
`;

export const ContainerTextDesc  = styled.div`
  margin: 0 30px 24px 30px;
`;

export const TextDesc  = styled.p`
  text-align: left;
  color: var(--text-grey);
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 2px;
`;
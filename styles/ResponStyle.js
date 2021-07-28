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
  padding-top: 50px;

  @media(max-width: 992px) {
    padding-top: 0px
  }
`;

export const ContainerImagesDesc = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerImages = styled.div`
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background-color: blue;

  @media(max-width: 992px) {
    width: 100%;
  }
`;

export const ContainerDesc = styled(ContainerImages)`
  background-color: white;
  
`;

export const TitleProduct  = styled.h4`
  font-weight: bold;
  margin: 0 30px 13px 30px;
`;

export const TextCod  = styled.h5`
  color: var(--text-grey);
  margin: 0 30px 13px 30px;
`;

export const ContainerStars  = styled.div`
  width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px 13px 30px;

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
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px 13px 30px;
`;

export const TextDiscount  = styled.h6`
  color: var(--text-grey);
  text-decoration: line-through;
`;

export const TextPrice  = styled.h3`
  font-weight: bold;
`;

export const Divisor  = styled.div`
  width: 90%;
  border-top: 2px solid var(--text-light-grey);
  opacity: 0.3;
  margin: 0 30px 13px 30px;
  align-self: center;
`;

export const ContainerSizes  = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin: 0 30px 13px 30px;
`;

export const TitleSize  = styled.h4`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const ContainerCircles  = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
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
  margin: 0 30px 13px 30px;
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
  margin-left: 30px;
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
  @media(max-width: 992px) {
    position: absolute;
    width: 100vw;
    bottom: 0;
    margin-left: 0;
    position:fixed;
    z-index:100;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;
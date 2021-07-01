import * as SC from "../styles/HomeStyle";

import Header from '../components/Header';
import Slide from '../components/Slide';
import CardProduct from '../components/Product_Card';
import Data from "../components/Data.json"


export default function Home() {
  return(
    <div id="app">
      <Header/>
      <Slide/>
      {/* <SC.Linha src={Banner}/> */}
      <SC.ContainerLine>
        <SC.ContainerLineLink>
          <SC.TextLineLink>Visualizar Linha Completa</SC.TextLineLink>
        </SC.ContainerLineLink>
        {
          Data.Product.map((products, index) =>
          {
            return(
            <CardProduct
              image={products.image}
              name={products.name}
              value={products.value.toFixed(2)}
              discount={(products.value-(products.value*(products.offer/100))).toFixed(2)}
              offer={products.offer}
              flag={products.new_flag}
              key={index}
            />
            )
          })
        }
      </SC.ContainerLine>
    </div>
  )
}

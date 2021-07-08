import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import * as SC from "../styles/HomeStyle";

import Header from '../components/Header';
import Slide from '../components/Slide';
import CardProduct from '../components/Product_Card';
import Data from "../components/Data.json"


export default function Home() {
  const router = useRouter();
  return(
    <SC.Main>
      <Head>
        <title>Double2 | Home</title>
      </Head>
      <Header/>
      <SC.ContentHome>
        <Slide/>
      {/* <SC.Linha src={Banner}/> */}
        <SC.ContainerLine>
          <SC.ContainerLineLink>
            <SC.TextLineLink>POPULARES </SC.TextLineLink>
          </SC.ContainerLineLink>
          {
            Data.Product.map((product, index) =>
            {
              return(
                <Link href={{
                  pathname: "/product",
                  query: {
                    id: index,
                    name: product.name,
                    },
                }}>
                  <a>
                    <CardProduct
                      image={product.image[0]}
                      name={product.name}
                      value={product.value.toFixed(2)}
                      discount={(product.value-(product.value*(product.offer/100))).toFixed(2)}
                      offer={product.offer}
                      flag={product.new_flag}
                      key={index}
                    />
                  </a>
                </Link>
              )
            })
          }
        </SC.ContainerLine>
      </SC.ContentHome>
    </SC.Main>
  )
}

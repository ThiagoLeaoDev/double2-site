import { useState } from 'react'; 
import { IconContext } from "react-icons";
import Link from 'next/link'
import { BiShoppingBag, BiHeart, BiUser, BiSearch, BiMenu, BiX} from "react-icons/bi";

import * as SC from "./HeaderStyle";


// import { Container } from './styles';

function Header() {
  const [Colapse, setColapse] = useState(false);

  return(
    <SC.Tabbar>
      <SC.ContainerLogo>
        <Link href={"/"}>
          <a>
            <SC.IconDouble src="/logo.svg" width={100} height={100}/>
          </a>
        </Link>
      </SC.ContainerLogo>

      <SC.ContainerHamburger>
        <Link href={"/"}>
          <SC.HoverIcon onClick={() => setColapse(!Colapse)}>
            {
              Colapse?
                <BiMenu color="white" size="2em"/>
                :
                <BiX color="white" size="2em"/>
            }
          </SC.HoverIcon>
        </Link>
      </SC.ContainerHamburger>

      <SC.ContainerOptions open={Colapse}>
        <Link href={"/"}>
            <SC.TabOption>
              <SC.TextOption>INÍCIO</SC.TextOption>
            </SC.TabOption>
        </Link>

        <Link href={"/"}>
            <SC.TabOption>
              <SC.TextOption>LANÇAMENTOS</SC.TextOption>
            </SC.TabOption>
        </Link>

        <Link href={"/"}>
            <SC.TabOption>
              <SC.TextOption>LINHAS</SC.TextOption>
            </SC.TabOption>
        </Link>
        
        <Link href={"/"}>
            <SC.TabOption>
              <SC.TextOption>PRODUTOS</SC.TextOption>
            </SC.TabOption>
        </Link>
      </SC.ContainerOptions>

      <SC.ContainerIcons>
        <Link href={"/"}>
          <SC.HoverIcon href="#">
            <BiSearch color="white" size="1.5em"/>
          </SC.HoverIcon>
        </Link>

        <Link href={"/"}>
          <SC.HoverIcon href="#">
            <BiUser color="white" size="1.5em"/>
          </SC.HoverIcon>
        </Link>

        <Link href={"/"}>
          <SC.HoverIcon href="#">
            <BiHeart color="white" size="1.5em"/>
          </SC.HoverIcon>
        </Link>

        <Link href={"/"}>
          <SC.HoverIcon href="#">
            <BiShoppingBag color="white" size="1.5em"/>
          </SC.HoverIcon>
        </Link>
      </SC.ContainerIcons>
    </SC.Tabbar>
  );
}

export default Header;
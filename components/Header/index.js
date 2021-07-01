
import { IconContext } from "react-icons";
import { BiShoppingBag, BiHeart, BiUser, BiSearch} from "react-icons/bi";

import * as SC from "./HeaderStyle";


// import { Container } from './styles';

function Header() {
  return(
    <SC.Tabbar>
      <SC.ContainerLogo>
          <SC.IconDouble src="/logo.svg" width={100} height={100}/>
      </SC.ContainerLogo>

      <SC.ContainerOptions>
        <SC.TabOption href="#">
          <SC.TextOption>INÍCIO</SC.TextOption>
        </SC.TabOption>
        <SC.TabOption href="#">
          <SC.TextOption>LANÇAMENTOS</SC.TextOption>
        </SC.TabOption>
        <SC.TabOption href="#">
          <SC.TextOption>LINHAS</SC.TextOption>
        </SC.TabOption>
        <SC.TabOption href="#">
          <SC.TextOption>PRODUTOS</SC.TextOption>
        </SC.TabOption>
      </SC.ContainerOptions>

      <SC.ContainerIcons>
        <SC.HoverIcon href="#">
          <BiSearch color="white" size="1.5em"/>
        </SC.HoverIcon>
        <SC.HoverIcon href="#">
          <BiUser color="white" size="1.5em"/>
        </SC.HoverIcon>
        <SC.HoverIcon href="#">
          <BiHeart color="white" size="1.5em"/>
        </SC.HoverIcon>
        <SC.HoverIcon href="#">
          <BiShoppingBag color="white" size="1.5em"/>
        </SC.HoverIcon>
      </SC.ContainerIcons>
    </SC.Tabbar>
  );
}

export default Header;
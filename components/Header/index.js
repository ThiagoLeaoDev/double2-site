import { IconContext } from "react-icons";
import { BiShoppingBag, BiHeart, BiUser, BiSearch} from "react-icons/bi";

import * as SC from "./HeaderStyle";

import Logo from "../../public/logo.svg"

// import { Container } from './styles';

function Header() {
  return(
    <SC.Tabbar>
      <SC.ContainerLogo>
        <SC.IconDouble src={Logo}/>
      </SC.ContainerLogo>

      <SC.ContainerOptions>
        <SC.TabOption href="#">
          <SC.TextOption>ÍNICIO</SC.TextOption>
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
          <IconContext.Provider value={{ color: "white", size: "1.5em"}}>
            <BiSearch/>
          </IconContext.Provider>
        </SC.HoverIcon>
        <SC.HoverIcon href="#">
          <IconContext.Provider value={{ color: "white", size: "1.5em"}}>
            <BiUser/>
          </IconContext.Provider>
        </SC.HoverIcon>
        <SC.HoverIcon href="#">
          <IconContext.Provider value={{ color: "white", size: "1.5em"}}>
            <BiHeart/>
          </IconContext.Provider>
        </SC.HoverIcon>
        <SC.HoverIcon href="#">
          <IconContext.Provider value={{ color: "white", size: "1.5em"}}>
            <BiShoppingBag/>
          </IconContext.Provider>
        </SC.HoverIcon>
      </SC.ContainerIcons>
    </SC.Tabbar>
  );
}

export default Header;
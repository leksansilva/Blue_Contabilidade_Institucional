/* eslint-disable @next/next/no-img-element */
import { Nav } from "../styles/component.Styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";


export default function Header() {
  return (
    <Nav>
      <div className="LogoBox">
        <img src="Blue.png" className="Logo" alt="logo" />
      </div>
      <div className="Navigation">
        <a>Serviços</a>
        <a>Portifólio</a>
        <a>Empresa</a>
        <a>Contato</a>
        <a>Nossa Plataforma</a>
      </div>
      <div className="Navigation-Mobile">
        <AiOutlineMenu className="MenuButton" />
      </div>
    </Nav>
  );
}

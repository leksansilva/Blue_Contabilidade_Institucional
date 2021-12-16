/* eslint-disable @next/next/no-img-element */
import { Nav } from "../styles/component.Styles";
import BlueLogo from "../assets/Blue.svg";

export default function Header() {
  return (
    <Nav>
      <div className="LogoBox">
        <img src="Blue.png" className="Logo" alt="logo" />
      </div>
      <div className="Navgation">
        <a>Serviços</a>
        <a>Portifólio</a>
        <a>Empresa</a>
        <a>Contato</a>
        <a>Nossa Plataforma</a>
      </div>
    </Nav>
  );
}

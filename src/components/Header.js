/* eslint-disable @next/next/no-img-element */
import { Nav } from "../styles/component.Styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import BlueLogo from "../assets/Blue.svg";
import { useState } from "react";
import { Link, animateScroll as scroll, Events } from "react-scroll";

export default function Header() {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };
 

  return (
    <Nav show={show}>
      <BlueLogo className="Logo" onClick={() => scroll.scrollToTop()} />
      <ul className="Navigation">
        <li>
          <Link offset={-90} className="Link"   smooth={true} duration={1000} to="empresa">
            Empresa
          </Link>
        </li>
        <li>
          <Link offset={-90} className="Link" smooth={true} duration={1000} to="serviços">
            Serviços
          </Link>
        </li>
        <li>
          <Link offset={-90} className="Link" smooth={true} duration={1000} to="portifólio">
            Portifólio
          </Link>
        </li>

        <li>
          <Link offset={-90} className="Link" smooth={true} duration={1000} to="contato">
            Contato
          </Link>
        </li>
        <li>
          <a className="Link">Nossa Plataforma</a>
        </li>
      </ul>
      <div className="Navigation-Mobile">
        {show ? (
          <AiOutlineClose onClick={toggleMenu} className="MenuButton" />
        ) : (
          <AiOutlineMenu onClick={toggleMenu} className="MenuButton" />
        )}
        <ul>
          <li>
            <Link offset={-90} to="empresa">Empresa</Link>
          </li>
          <li>
            <Link offset={-90} className="Link" smooth={true} duration={1000} to="serviços">
              Serviços
            </Link>
          </li>
          <li>
            <Link
              className="Link"
              smooth={true}
              duration={1000}
              to="portifólio"
            >
              Portifólio
            </Link>
          </li>

          <li>
            <Link offset={-90}  className="Link"to="contato">Contato</Link>
          </li>
          <li>
            <a className="Link" >Nossa Plataforma</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

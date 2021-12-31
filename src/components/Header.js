/* eslint-disable @next/next/no-img-element */
import { Nav } from "../styles/component.Styles";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import BlueLogo from "../assets/Blue.svg";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

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
          <Link
            offset={-90}
            className="Link"
            smooth={true}
            duration={1000}
            to="services"
          >
            Serviços
          </Link>
        </li>
        <li>
          <Link
            offset={-90}
            className="Link"
            smooth={true}
            duration={1000}
            to="portfolio"
          >
            Portifólio
          </Link>
        </li>
        <li>
          <Link
            offset={-90}
            className="Link"
            smooth={true}
            duration={1000}
            to="company"
          >
            Empresa
          </Link>
        </li>
        <li>
          <Link
            offset={-90}
            className="Link"
            smooth={true}
            duration={1000}
            to="contact"
          >
            Contato
          </Link>
        </li>
        <li>
          <a className="Link" onClick={() => alert("Em breve!")}>
            Nossa Plataforma
          </a>
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
            <Link
              offset={-90}
              className="Link"
              smooth={true}
              duration={1000}
              to="services"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              className="Link"
              smooth={true}
              offset={-90}
              duration={1000}
              to="portfolio"
            >
              Portifólio
            </Link>
          </li>
          <li>
            <Link
              offset={-90}
              className="Link"
              smooth={true}
              duration={1000}
              to="company"
            >
              Empresa
            </Link>
          </li>
          <li>
            <Link
              offset={-90}
              smooth={true}
              duration={1000}
              className="Link"
              to="contact"
            >
              Contato
            </Link>
          </li>
          <li>
            <a className="Link" onClick={() => alert("Em breve!")}>
              Nossa Plataforma
            </a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

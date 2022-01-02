/* eslint-disable jsx-a11y/alt-text */
import { Foot } from "../styles/component.Styles";
import { Image } from "../styles/page.Styles";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <Foot id="contact">
      <div className="grid">
        <div className="image">
          <Image
            position="50% 2%"
            borderRadius="100%"
            width="100%"
            imageSize="250%"
            height="100%"
            source="dono.jpg"
          />
          <p>Maurício Nunes Brandão</p>
        </div>
        <div className="contact">
          <div className="item1">Contato</div>
          <div className="item">
            {" "}
            <BsTelephoneFill className="icon" />
            &nbsp;{" "}
            <a className="linkContact" href="tel:+55 (75) 9 9229-3373">
              +55 (75) 9 9229-3373
            </a>
          </div>
          <div className="item">
            <MdOutlineEmail className="icon" />
            &nbsp;
            <a
              className="linkContact"
              href="mailto: mauricio@bluecontabilidade.com"
            >
              mauricio@bluecontabilidade.com
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        {"Copyright © "}
        Blue Contabilidade {new Date().getFullYear()}
        {"."}
      </div>
    </Foot>
  );
}

import { Foot } from "../styles/component.Styles";

export default function Footer() {
  return (
    <Foot id="contato">
      <div className="grid">a</div>
      <div className="copyright">
        {"Copyright © "}
        Blue Contabilidade {new Date().getFullYear()}
        {"."}
      </div>
    </Foot>
  );
}

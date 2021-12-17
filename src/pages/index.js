/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { useState } from "react";
import {
  Button,
  Container,
  Image,
  Teste,
  Teste2,
  Teste3,
} from "../styles/page.Styles";
import BlueLogo from "../assets/Blue.svg";

export default function Home() {
  const [somador, setSomador] = useState(1);
  function utilizarBotao(ev, newValeu) {
    let proximo =somador;
    proximo= proximo + somador;
    setSomador( proximo);
    
  }

  return (
    <>
      <Head>
        <title>Blue Contabilidade</title>
        <link rel="icon" href="/Blue.svg" />
      </Head>
      <Image>
        <div className="details" >
          <Button onClick={utilizarBotao} >{somador}</Button>
          </div> 
      </Image>

      <Container color="green" />
      <Container color="red" />
      <Container color="yellow" />
    </>
  );
}

/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { useState } from "react";
import { Button, Container, Image } from "../styles/page.Styles";

export default function Home() {
  const [somador, setSomador] = useState(1);
  function utilizarBotao(ev, newValeu) {
    let proximo = somador;
    proximo = proximo + somador;
    setSomador(proximo);
  }

  return (
    <>
      <Head>
        <title>Blue Contabilidade</title>
        <link rel="icon" href="/Blue.svg" />
        <link rel="stylesheet" href="https://use.typekit.net/qlm6efy.css"/>
      </Head>

      <Image>
        <div className="details">
          <Button onClick={utilizarBotao}>{somador}</Button>
        </div>
      </Image>

      <Container id="serviços" color="green" />
      <Container id="portifólio" color="yellow" />
      <Container id="empresa" color="red" />
    </>
  );
}

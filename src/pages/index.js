import Head from "next/head";
import { useState } from "react";
import { Button, Container, Image, Teste, Teste2, Teste3 } from "../styles/page.Styles";
import BlueLogo from "../assets/Blue.svg";

export default function Home() {
  const [somador, setSomador] = useState(1);
  function utilizarBotao(ev, newValeu) {
    setSomador(somador + 1);
  }

  return (
    <>
      <Head>
        <title>Blue Contabilidade</title>
        <link rel="icon" href="/Blue.svg" />
      </Head>
      <Container color="rgba(23, 65, 149, 0.29)">
       
        <Image src="job.jpg" alt="HTML5 Icon" />
        <Button onClick={utilizarBotao}>Mais Sobre</Button>
       
      </Container>
      <Container color="green" />
      <Container color="red" />
      <Container color="yellow" />
      <div style={{ height: "2000px" }} />
    </>
  );
}

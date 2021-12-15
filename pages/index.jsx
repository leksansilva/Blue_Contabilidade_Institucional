import Head from 'next/head';
import { useState } from 'react';
import { Container, Teste, Teste2, Teste3 } from '../styles/page.Styles';

export default function Home() {
 
  let GH = "Jorge está aprendendo constantes";
  const [somador,setSomador]= useState(1);
  function utilizarBotao(ev, newValeu){
    setSomador(somador+1);
  }

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/Blueicon.svg" />
      </Head>
      <Teste/>
      <Teste2/>
      <Teste3>{GH}</Teste3>
      <Teste3>{somador}</Teste3>
      <button onClick={utilizarBotao} >Somar +1</button>
    </Container>
  )
}

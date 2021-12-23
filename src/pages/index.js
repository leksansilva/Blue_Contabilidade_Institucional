/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { useState } from "react";
import { Link } from "react-scroll";
import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  Text,
  Title,
} from "../styles/page.Styles";

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
        <link rel="stylesheet" href="https://use.typekit.net/qlm6efy.css" />
      </Head>

      <Image>
        <div className="details">
          <Link to="empresa" smooth={true} duration={1000}>
            <Button>Conheça um pouco sobre nós!</Button>
          </Link>
        </div>
      </Image>
      <Container direction="row" id="empresa" color="red">
        <Grid>
          <Card>
            <Title color="secondary">MISSÃO</Title>
          </Card>
          <Card color="contrast">
            <Text>
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
            </Text>
          </Card>
          <Card color="contrast">
            <Text>
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
            </Text>
          </Card>
          <Card>
            <Title color="secondary">VISÃO</Title>
          </Card>
          <Card>
            <Title color="secondary">VALORES</Title>
          </Card>
          <Card color="contrast" >
          <Text>
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
            </Text>
          </Card>
        </Grid>
      </Container>
      <Container id="serviços" color="green" />
      <Container id="portifólio" color="yellow" />
    </>
  );
}

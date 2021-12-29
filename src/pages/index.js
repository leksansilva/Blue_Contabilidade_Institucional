/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
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
  return (
    <>
      <Head>
        <title>Blue Contabilidade</title>
        <link rel="icon" href="/BlueIcon.svg" sizes="128x128" />
        <meta name="description" content="Contabilidade Digital" />
        <link rel="stylesheet" href="https://use.typekit.net/qlm6efy.css" />
      </Head>

      <Image source={"job.jpg"}>
        <div className="details">
          <Link to="empresa" offset={-90} smooth={true} duration={1000}>
            <Button>Conheça um pouco sobre nós!</Button>
          </Link>
        </div>
      </Image>
      <Container height="auto" id="serviços" color="primary">
        <Title fontSizeMobile="20px" color="secondary" border="none none solid none">
          Serviços
        </Title>
        <Grid rows={3}>
          <Card content="baseline" alignItems="end">
            <Title
              fontSize="1.2rem"
              color="secondary"
              border="none none solid none"
            >
              Contabilidade digital para simples nacional
            </Title>
            <Text color="secondary" align="right">
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
            </Text>
          </Card>
          <Card>
            <Title fontSize="1.2rem" color="secondary" border="solid">
              imagem 1
            </Title>
          </Card>
          <Card content="center" alignItems="center">
            <Title fontSize="x-large" color="secondary" border="solid">
              Imagem 2
            </Title>
          </Card>
          <Card content="baseline" alignItems="baseline">
            <Title
             fontSize="1.2rem"
              color="secondary"
              border="none none solid none"
            >
              Contabilidade digital para lucro presumido
            </Title>
            <Text color="secondary" align="left">
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
            </Text>
          </Card>
          <Card content="baseline" alignItems="end">
            <Title
              fontSize="1.2rem"
              color="secondary"
              border="none none solid none"
            >
              Serviço 3
            </Title>
            <Text color="secondary" align="right">
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
              Sed urna ipsum, egestas id laoreet non, hendrerit at nisl. Proin
              dictum ipsum nec lectus varius vehicula. Pellentesque lobortis,
            </Text>
          </Card>
          <Card content="center" alignItems="center">
            <Title fontSize="x-large" color="secondary" border="solid">
              Imagem 3
            </Title>
          </Card>
        </Grid>
      </Container>
      <Container id="portifólio" color="contrast" padding="15px">
        <Title  fontSizeMobile="20px" border="none none solid none">Nossos Clientes</Title>
        <Card width="100%" height="100%" color="tertiary"></Card>
      </Container>
      <Container id="empresa" height="200vh" padding="15px">
        <Card margin="15px" width="100%">
          <Title fontSizeMobile="20px" border="none none solid none" color="secondary">
            Quem somos?
          </Title>
          <Text color="secondary">em Construção</Text>
        </Card>

        <Grid rows={3}>
          <Card>
            <Title color="secondary">MISSÃO</Title>
          </Card>
          <Card color="contrast">
            <Text>
              Trazer as melhores soluções que alie tecnologias existentes com
              inovações próprias afim de garantir uma melhora no controle
              patrimonial e redução da carga tributária, aproximar o cliente da
              contabilidade através de nossa plataforma interativa e
              automatizada.
            </Text>
          </Card>
          <Card color="contrast">
            <Text>
              Consolidar-se como a empresa que preza pela satisfação referente
              as entregas dos serviços contratados. Ser referência local em
              inovação e tecnologia. Excelência nos serviços que formos
              contratados.
            </Text>
          </Card>
          <Card>
            <Title color="secondary">VISÃO</Title>
          </Card>
          <Card>
            <Title color="secondary">VALORES</Title>
          </Card>
          <Card color="contrast">
            <Text>
              Oferecer serviço personalizados sob medida da demanda do cliente,
              preço justo e transparência.
            </Text>
          </Card>
        </Grid>
      </Container>
    </>
  );
}

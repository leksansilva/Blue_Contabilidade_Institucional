import React from "react";
import { Balls, Screen } from "../styles/component.Styles";
import BlueLogo from "../assets/Blue.svg";
import Head from "next/head";

export default function LoadingScreen() {
  return (
    <>
      <Head>
        <title>Blue Contabilidade</title>
        <link rel="icon" href="/BlueIcon.svg" sizes="128x128" />
        <link rel="stylesheet" href="https://use.typekit.net/qlm6efy.css" />
      </Head>

      <Screen> 
      <BlueLogo />
        <Balls>
          <div className="ball one"></div>
          <div className="ball two"></div>
          <div className="ball three"></div>
        </Balls>
      </Screen>
    </>
  );
}

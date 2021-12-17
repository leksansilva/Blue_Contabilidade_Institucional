import styled from "styled-components";

export const Nav = styled.header`
  display: flex;
  width: 100%;
  top: 0;
  height: 7rem;
  background-color: #ffff;
  position: sticky;
  z-index: 2 ;
  .LogoBox {
    width: 7rem;
    height: 100%;
    padding: 1.5rem;
    margin-right: auto;
    position: relative;
  }
  .Logo {
    width: 7.5rem;
    height: auto;
  }
  .Navigation {
    justify-content: center;
    text-align: center;
    padding: 2.5rem;
  }
  .Navigation-Mobile {
    display: none;
  }
  @media screen and (max-width: 787px) {
    .Navigation {
      display: none;
    }
    .Navigation-Mobile {
      display: flow-root;
      justify-content: center;
      text-align: center;
      padding: 2.5rem;
    }
    .MenuButton {
      color: ${(props) => props.theme.color.text.primary} ;
      font-size: 1.5rem;
    }
  }
  a {
    color: ${(props) => props.theme.color.text.primary};
    font-size: 1.2rem;
    margin: 1rem;
  }
`;

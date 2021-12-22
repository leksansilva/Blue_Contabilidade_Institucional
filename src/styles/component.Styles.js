import styled from "styled-components";
import media from "./media";

export const Nav = styled.header`
  display: flex;
  width: 100%;
  top: 0;
  height: 7rem;
  background-color: #ffff;
  position: sticky;
  z-index: 2;
  .Logo {
    display: block;
    margin-bottom: 15px;
    width: 8rem;
    height: 100%;
    margin-right: auto;
    margin-left: 15px;
  }
  .Navigation {
    font-size: 1.1rem;
    display: flex;
    font-family: montserrat, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  .Navigation-Mobile {
    display: none;
  }
  ${media.desktop`
  .Navigation {
      display: none;
    }
    .Navigation-Mobile {
      display: block;
      background-color: #ffff;
      padding: 2.5rem;
      height: ${({show})=> show?'100vh':'auto'};
    
  
      ul {
        display: ${({show})=> show?'block':'none'};
       
      }
    }
    .MenuButton {
      color: ${({theme}) => theme.color.text.primary} ;
      font-size: 1.5rem;
    }
  `}
  li,.Link {
    display: block;
    color: ${({theme}) => theme.color.text.primary};
    margin: 1rem;
    text-align: center;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
`;

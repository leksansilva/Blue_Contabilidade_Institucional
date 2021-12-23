import styled from "styled-components";
import media from "./media";

export const Nav = styled.header`
  display: flex;
  width: 100%;
  top: 0;
  height: 14vh;
  background-color: #ffff;
  position: sticky;
  z-index: 2;
  .Logo {
    display: block;
    width: 6rem;
    height: 100%;
    margin-right: auto;
    margin-left: 12px;
    cursor: pointer;
  }
  .Navigation {
    font-size: .9rem;
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
      font-size: 3.5vh;
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

export const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #ffff;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${({theme})=>theme.color.primary};
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }

  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 2s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
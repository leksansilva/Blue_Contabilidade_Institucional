import styled from "styled-components";
import media from "./media";

export const Nav = styled.header`
  display: flex;
  width: 100%;
  top: 0;
  height: 7em;
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
    font-size: 0.9rem;
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
      height: ${({ show }) => (show ? "100vh" : "auto")};
      
      ul {
      
        display: ${({ show }) => (show ? "block" : "none")};
       
      }
    }
    .MenuButton {
      color: ${({ theme }) => theme.color.text.primary} ;
      font-size: 3.5vh;
    }
  `}
  li,.Link {
    display: block;
    color: ${({ theme }) => theme.color.text.primary};
    margin: 1rem;
    text-align: center;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
`;

export const Foot = styled.footer`
  bottom: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.contrast};
  height: 50vh;
  min-height: 50vh;
  .grid {
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 90%;
    width: 100%;
    font-family: montserrat, sans-serif;
    font-weight: 400;
    font-style: normal;
    .image {
      height: 7rem;
      width: 7rem;
      text-align: center;
      font-size: 0.8rem;
      font-family: montserrat, sans-serif;
      font-weight: 300;
      font-style: normal;
      color: ${({ theme }) => theme.color.text.primary};

      ${media.tablet`
      height: 7rem;
      width: 7rem; 
        font-size: 0.8rem;
      `}
      ${media.mobile`
        height: 4rem;
        width: 4rem; 
        font-size: 0.5rem;
      `}
    }
    .contact {
      font-size: 0.8rem;
      display: flex;
      flex-direction: column;
      color: ${({ theme }) => theme.color.text.primary};
      .item1 {
        font-size: 0.9rem;
        font-family: montserrat, sans-serif;
        font-weight: 500;
        font-style: normal;
        flex-grow: 0.2;
        ${media.tablet`
        flex-grow: 0.1;
        `}
      }
      .item {
        display: flex;
        font-family: montserrat, sans-serif;
        font-weight: 400;
        font-style: normal;
        flex-grow: 0.1;
        ${media.tablet`
        flex-grow: 0.05;
        `}
        font-size: 0.8rem;
        flex-wrap: wrap;
        .icon {
          height: 0.8rem;
          width: auto;
        }
        .linkContact {
          text-decoration: none;
          color: inherit;
        }
        ${media.tablet`
        font-size: 0.5rem;
        .icon{
          height: 0.5rem;
          width: auto;
        }
      `}
        ${media.mobile`
        font-size: 0.5rem;
        .icon{
          height: 0.5rem;
          width: auto;
        }
      `}
      }
    }
  }

  .copyright {
    height: 10%;
    text-align: center;
    color: ${({ theme }) => theme.color.text.primary};
    opacity: 0.9;
    font-size: 0.8rem;
    font-family: montserrat, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  transform: translate(-50%, -50%);
  margin-left: 90px;
  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.primary};
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

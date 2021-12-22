import styled from "styled-components";
import media from "./media";
 
export const Container = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({color}) => color};
`;

export const Image = styled.div`
  background-image: url("job.jpg");
  background-size: 100vw;
  display: block;
  background-repeat: no-repeat;
  background-position: 50% ;
  top: 0px;
  height: 45vw;
  .details {
    display: flex;
    background-color: rgba(0, 11, 40, 0.5);
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const Teste = styled.div`
  height: 80px;
  width: 80px;
  z-index: 1;
  background-color: ${(props) => props.theme.color.primary};
`;

export const Teste2 = styled.div`
  position: absolute;
  z-index: 1;
  height: 80px;
  width: 80px;
  background-color: ${({theme}) => theme.color.secundary};
`;

export const Button = styled.button`
  position: relative;
  border: none;
  font-size: 1.2rem;
  padding: 0.7rem 2.5rem;
  color: #ffff;
  border-radius: 0.3em;
  background-color: ${({theme}) => theme.color.primary};
  :active {
    background-color: ${({theme}) => theme.color.tertiary};
  }
`;

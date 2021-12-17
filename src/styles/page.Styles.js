import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 47vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;
export const Image = styled.img`
   top: 7%;
  @media screen and (max-width: 1440px) and (max-height: 845px) {
    top: 12%;
  }
  width: 100vw;
  height: auto;
  z-index: -1;
  position: fixed;
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
  background-color: ${(props) => props.theme.color.secundary};
`;

export const Button = styled.button`
  position: absolute;
  border: none;
  font-size: 1.2rem;
  padding: 15px 30px;
  color: #ffff;
  background-color: ${(props) => props.theme.color.primary};
`;

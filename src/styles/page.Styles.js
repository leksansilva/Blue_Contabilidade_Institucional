import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;
export const Image = styled.img`
  width:100%;
  height:100vh;
  z-index: -2;
`;

export const Teste = styled.div`
  height: 80px;
  width: 80px;
  z-index: 1;
  background-color: ${(props) => props.theme.color.primary};
`;

export const Teste2 = styled.div`
position:absolute;
    z-index:1;
  height: 80px;
  width: 80px;
  background-color: ${(props) => props.theme.color.secundary};
`;

export const Button = styled.button`
  position:absolute;
  border:none;
  font-size: 1.2rem;
  padding:15px 30px;
  color: #ffff;
  background-color: ${props=> props.theme.color.primary};
`;

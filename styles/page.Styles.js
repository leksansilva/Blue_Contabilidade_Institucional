import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Teste = styled.div`
  height: 80px;
  width: 80px;
  background-color: ${(props) => props.theme.color.primary};
`;

export const Teste2 = styled.div`
  height: 80px;
  width: 80px;
  background-color: ${(props) => props.theme.color.secundary};
`;

export const Teste3 = styled.h1`
  color: ${(props) => props.theme.color.text.primary};
`;

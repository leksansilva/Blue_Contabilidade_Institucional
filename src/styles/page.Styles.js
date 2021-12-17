import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

export const Image = styled.div`
  background-image: url("job.jpg");
  background-size: 100vw;
  display: block;
  position: relative;
  background-position: 50% auto;
  top: 0px;
  height: 45vw;
  .details {
    display: flex;
    background-color: rgba(23, 65, 149, 0.29);
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
  background-color: ${(props) => props.theme.color.secundary};
`;

export const Button = styled.button`
 position: relative;
  border: none;
  font-size: 1.2rem;
  padding: 0.5rem 2rem;
  color: #ffff;
  background-color: ${(props) => props.theme.color.primary};
`;

import styled from "styled-components";
import media from "./media";

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  height: ${({ height }) => (height ? height : "100vh")};
  min-height: ${({ height }) => (height ? height : "100vh")};
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
`;

export const Image = styled.div`
  background-image: url("job.jpg");
  background-size: 100vw;
  display: block;
  background-repeat: no-repeat;
  background-position: 50%;
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

export const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 33.33%;
  background-color: ${({ color, theme }) =>
    color ? color : theme.color.primary};
`;
export const Card = styled.div`
  background-color: ${({ color, theme }) =>
    color === "primary"
      ? theme.color.primary
      : color === "secondary"
      ? theme.color.secondary
      : color === "tertiary"
      ? theme.color.secondary
      : color === "tertiary"
      ? theme.color.tertiary
      : color === "contrast"
      ? theme.color.contrast
      : theme.color.primary};
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 15px;
`;

export const Title = styled.h1`
  font-family: montserrat, sans-serif;
  font-weight: 600;
  font-style: normal;
  color: ${({ color, theme }) =>
    color === "secondary"
      ? theme.color.text.secondary
      : theme.color.text.primary};
  border-top-style: solid;
  border-bottom-style: solid;
  padding: 15px;
`;

export const Text = styled.p`
  font-family: montserrat, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  color: ${({ color, theme }) =>
    color === "secondary"
      ? theme.color.text.secondary
      : theme.color.text.primary};
  text-transform: uppercase;
`;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  border: none;
  font-size: 15px;
  font-family: montserrat, sans-serif;
  font-weight: 300;
  font-style: normal;
  padding: 0.7rem 2.2rem;
  color: #ffff;
  border-radius: 0.3em;
  background-color: ${({ theme }) => theme.color.primary};
  :active {
    background-color: ${({ theme }) => theme.color.tertiary};
  }
`;

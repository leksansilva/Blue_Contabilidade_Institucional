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
  padding: ${({ padding }) => padding};
`;

export const Image = styled.div`
  background-image: url(${({ source }) => source});
  background-size: ${({imageSize})=>imageSize?imageSize:"100% 100%"};
  display: block;
  width: ${({width})=>width?width:"100%"};
  opacity: ${({opacity})=>opacity?opacity:1};
  background-repeat: no-repeat;
  background-position:${({position})=>position?position:"50%"};
  top: 0;
  border-radius: ${({borderRadius})=>borderRadius?borderRadius:"none"};
  height: ${({height})=>height?height:"45vw"};
  .details {
    display: flex;
    flex-direction: column;
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
  grid-auto-rows: ${({ rows }) =>
    rows === 1
      ? "100%"
      : rows === 2
      ? "50%"
      : rows === 3
      ? "33.33%"
      : rows === 4
      ? "24%"
      : "100%"};
  background-color: ${({ color, theme }) =>
    color ? color : theme.color.primary};
`;
export const Card = styled.div`
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
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
  justify-content: ${({ content }) => (content ? content : "center")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  overflow: hidden;
  padding: ${({padding})=>padding?padding:"0"};
  margin: ${({ margin }) => margin};
`;

export const Title = styled.h1`
  font-family: montserrat, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "xx-large")};
  color: ${({ color, theme }) =>
    color === "secondary"
      ? theme.color.text.secondary
      : theme.color.text.primary};
  border-style: ${({ border }) => (border ? border : "solid none solid none")};
  ${media.tablet`
  font-size: ${({ fontSizeMobile }) =>
    fontSizeMobile ? fontSizeMobile : "25px"};
  
  `}
  ${media.mobile`
  font-size: ${({ fontSizeMobile }) =>
    fontSizeMobile ? fontSizeMobile : "15px"};
  
  `}
  padding: 15px;
`;

export const Text = styled.p`
  font-family: montserrat, sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  font-style: normal;
  text-align: ${({ align }) => (align ? align : "center")};
  color: ${({ color, theme }) =>
    color === "secondary"
      ? theme.color.text.secondary
      : theme.color.text.primary};
  ${media.tablet`
  font-size: ${({ fontSizeMobile }) =>
    fontSizeMobile ? fontSizeMobile : "20px"};
  
  `}
  ${media.mobile`
  font-size: ${({ fontSizeMobile }) =>
    fontSizeMobile ? fontSizeMobile : "12px"};
  
  `}
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

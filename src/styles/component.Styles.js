import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 7rem;
  background-color: #ffff;
  position: fixed;
  z-index: 2;
  .LogoBox{
    width:7rem;
    height: 100%;
    padding:1.5rem;
    margin-right: auto;
  }
  .Logo{
    width: 7.5rem;
    height: auto;
  }
  .Navgation{
    display: flex;
    justify-content: center;
    padding: 2.5rem;
  }
  a {
    color: ${props=>props.theme.color.text.primary};
    font-size: 1.23rem;
    margin: 1rem;
    margin-right: 3rem;
    display: flex;
  }
`;

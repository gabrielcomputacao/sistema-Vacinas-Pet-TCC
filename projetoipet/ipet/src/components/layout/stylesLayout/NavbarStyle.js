import styled from "styled-components";

export const DivNavbar = styled.div`
  height: 80px;
  width: 100%;
  background-color: green;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 2.5em;
`;

export const Imagem = styled.img`
  width: 100px;
  height: 60px;
  padding: 0.5em;
`;

export const Navegacao = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-right: 3em;
  }
  li {
    margin: 0 1.6em;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: 700;

    &:hover {
      color: black;
    }
  }

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const ButtonHamburguer = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  label {
    height: 22px;
    width: 30px;
    cursor: pointer;
    position: relative;
    display: block;
  }

  span {
    position: absolute;
    display: block;
    height: 5px;
    width: 100%;
    border-radius: 30px;
    background-color: #fff;
  }

  label span:nth-child(1) {
    top: 0;
  }
  label span:nth-child(2) {
    top: 8px;
  }
  label span:nth-child(3) {
    top: 16px;
  }

  @media screen and (max-width: 860px) {
    display: block;
  }
`;

export const MobileButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const NavegacaoMobile = styled(Navegacao)`
  display: ${(props) => (props.visible)};
  background-color: #98FB98;


  a {
    color: black;

  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  li {
    width: 100%;
    text-align: center;
    padding: .7em 0;
    font-size: 18px;
    margin: 0px;
  }
`;

export const  Separador = styled.div`

    width: 100%;
    background-color: black;
    height: 1px;

`


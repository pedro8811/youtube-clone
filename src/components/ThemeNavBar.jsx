import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 2;
  box-shadow: inset 10px #ff0000;
  position: fixed;
  width: 100%;
  padding: 10px;
  margin-top: 50px;
  background-color: rgb(15,15,15);
  button{
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: #252525;
    font-size: 14px;
    font-family: 'Roboto';
    cursor: pointer;
    transition: all .1s linear;
    &:hover{
      background-color: #363636;
    }
    &:nth-child(1){
      background-color: #f1f1f1;
      color: black;
      transition: all .1s linear;
      &:hover{
        background-color: white;
      }
    }
  }
  color: white;
`

export default function ThemeNavBar(){
  return(
    <Main>
        <button>Tudo</button>
        <button>Programação</button>
        <button>Filmes</button>
        <button>Carros</button>
        <button>Podcast</button>
        <button>Ao vivo</button>
        <button>Tudo</button>
        <button>Programação</button>
        <button>Filmes</button>
        <button>Carros</button>
        <button>Carros</button>
        <button>Carros</button>
        <button>Carros</button>
        <button>Carros</button>
        <button>Podcast</button>
        <button>Ao vivo</button>
    </Main>
  )
}
import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  position: fixed;
  margin-top: 60px;
  margin-left: 100px;
  button{
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    background-color: #252525;
    margin-right: 15px;
    font-size: 14px;
    font-family: 'Roboto';
    cursor: pointer;
    transition: all .1s linear;
    &:hover{
      background-color: #606060;
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
        <button>Podcast</button>
        <button>Ao vivo</button>
    </Main>
  )
}
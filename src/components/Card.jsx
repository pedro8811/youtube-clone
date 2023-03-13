import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

const Main = styled.div`
  padding: 0px;
  margin: 0;
  img{
    border-radius: 10px;
    width: 100%;
  }
  .main-title{
    display: flex;
    flex-direction: row;
    .canalTitulo{
      display: flex;
      flex-direction: column;
      text-align: left;
      .title{
        margin: 0;
        margin-bottom: 1px;
        display: flex;
        justify-content: left;
        font-weight: 500;
      }
      .canal{
        margin: 0;
        font-size: 14px;
        color: #9e9e9e;
        &:hover{
          color: white;
          cursor: pointer;
        }
      }
      .views{
        margin: 0;
        font-size: 14px;
        color: #9e9e9e;
      }
    }
  }
`

export default function Card(props){
  return(
    <Main>
      <img src={props.image} alt="" />
      <div className="main-title">
        <Avatar style={{marginRight: '10px'}} src={props.avatar}>{props.avatar}</Avatar>
        <div className="canalTitulo">
          <p className="title">{props.title}</p>
          <p className="canal">{props.channel}</p>
          <p className="views">{props.views} • {props.time}</p>
        </div>
      </div>
    </Main>
  )
}
import React from "react";
import styled from "styled-components";
import {MdHomeFilled, MdOutlineVideoLibrary} from 'react-icons/md'
import {AiOutlineFire} from 'react-icons/ai'
import {IoMdCheckboxOutline} from 'react-icons/io'

const Main = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  color: white;
`

const Card = styled.div`
  padding: 20px 15px;
  text-align: center;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  #icon{
    font-size: 1.5em;
  }
  p{
    margin: 0;
    font-size: .6em;
  }
  &:hover{
    background: #242424;
  }
`

export default function LeftBar(){
  return(
    <Main>
      <Card>
        <MdHomeFilled id="icon"/>
        <p>Início</p>
      </Card>
      <Card>
        <AiOutlineFire id="icon"/>
        <p>Shorts</p>
      </Card>
      <Card>
        <IoMdCheckboxOutline id="icon"/>
        <p>Inscrições</p>
      </Card>
      <Card>
        <MdOutlineVideoLibrary id="icon"/>
        <p>Biblioteca</p>
      </Card>
    </Main>
  )
}
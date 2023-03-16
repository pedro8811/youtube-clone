import React from "react";
import styled from "styled-components";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { FiMoreVertical } from "react-icons/fi";
import { HiBarsArrowUp } from "react-icons/hi2";
import {AiOutlineClockCircle, AiOutlineDownload, AiOutlineMinusCircle} from 'react-icons/ai'
import {MdNotInterested} from 'react-icons/md'
import {IoIosShareAlt} from 'react-icons/io'
import {BsFlag} from 'react-icons/bs'
import {BiListPlus} from 'react-icons/bi'

const Main = styled.div`
  padding: 0px;
  text-align: right;
  cursor: pointer;
  &:hover {
    img {
      border-radius: 0px;
    }
  }
  #long-button {
    position: absolute;
    transform: translateX(370px);
    color: rgba(255, 255, 255, 0.3);
    float: right;
  }
  .card-main:hover + #long-button,
  #long-button:hover {
    display: block;
  }
  img {
    transition: all 0.2s ease;
    border-radius: 12px;
    box-shadow: inset 0 10px black;
    width: 100%;
  }
  .main-title {
    display: flex;
    flex-direction: row;
    .canalTitulo {
      display: flex;
      flex-direction: column;
      text-align: left;
      .title {
        margin: 0;
        margin-bottom: 1px;
        display: flex;
        justify-content: left;
        font-weight: 500;
      }
      .canal {
        margin: 0;
        font-size: 14px;
        color: #9e9e9e;
        &:hover {
          color: white;
          cursor: pointer;
        }
      }
      .views {
        margin: 0;
        font-size: 14px;
        color: #9e9e9e;
      }
    }
  }
  .duration {
    position: absolute;
    margin: 0;
    margin-left: 359px;
    background-color: rgba(15, 15, 15, 0.8);
    padding: 1px;
    font-size: 12px;
    border-radius: 3px;
    width: 30px;
    height: 15px;
    transform: translateY(-30px);
  }
`;

const menuIcon = {
  margin: 0,
  marginRight: '10px',
  fontSize: "22px",
};

const menuWord = {
  margin: 0,
};

const MenuItemClass = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  p{
    margin: 0;
    margin-left: 10px;
    font-size: 16px;
  }
`

export default function Card(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Main className="card-main">
      <img src={props.image} alt="" />
      <p className="duration">{props.duration}</p>
      <div className="main-title">
        <Avatar style={{ marginRight: "10px" }} src={props.avatar}>
          {props.avatar}
        </Avatar>
        <div className="canalTitulo">
          <p className="title">{props.title}</p>
          <p className="canal">{props.channel}</p>
          <p className="views">
            {props.views} • {props.time}
          </p>
        </div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FiMoreVertical />
        </IconButton>
      </div>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        disableScrollLock={true}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "280px",
            backgroundColor: "#363636",
            color: "white",
          },
        }}
      >
        <MenuItem >
          <MenuItemClass>
            <HiBarsArrowUp/>
            <p>Adicionar á fila</p>
          </MenuItemClass>
        </MenuItem>
        <MenuItem>
          <MenuItemClass>
            <AiOutlineClockCircle/>
            <p>Salvar em "Assistir mais tarde"</p>
          </MenuItemClass>
        </MenuItem>
        <MenuItem>
          <MenuItemClass>
            <BiListPlus/>
            <p>Salvar na playlist</p>
          </MenuItemClass>
        </MenuItem>
        <MenuItem>
          <MenuItemClass>
            <AiOutlineDownload/>
            <p>Download</p>
          </MenuItemClass>
        </MenuItem>
        <MenuItem>
          <MenuItemClass>
            <IoIosShareAlt/>
            <p>Compartilhar</p>
          </MenuItemClass>
        </MenuItem>
        <hr />
        <MenuItem>
          <MenuItemClass>
            <MdNotInterested/>
            <p>Não tenho interesse</p>
          </MenuItemClass>
        </MenuItem>
        <MenuItem>
          <MenuItemClass>
            <AiOutlineMinusCircle/>
            <p>Não recomendar o canal</p>
          </MenuItemClass>
        </MenuItem>
        <MenuItem>
          <MenuItemClass>
            <BsFlag/>
            <p>Denunciar</p>
          </MenuItemClass>
        </MenuItem>
      </Menu>
    </Main>
  );
}

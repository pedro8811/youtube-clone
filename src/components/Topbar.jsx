import React, { useState } from "react";
import styled from "styled-components";

import ytLogo from "../assets/youtube-icon.svg";

import { HiBars3 } from "react-icons/hi2";
import { IconButton, Tooltip, Avatar } from "@mui/material";
import { IoSearchOutline, IoVideocamOutline } from "react-icons/io5";
import { BsFillMicFill, BsFillKeyboardFill } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import {MdOutlineClear} from 'react-icons/md'

import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Main = styled.div`
  margin: 0px;
  position: fixed;
  padding: 5px 0px;
  border-bottom: 1px solid rgb(15,15,15);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const ButtonAndLogo = styled.div`
  display: flex;
  align-items: center;
`;

const YoutubeLogo = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  img {
    width: 40px;
  }
  h3 {
    margin: 0;
    font-weight: 400;
    font-stretch: expanded;
  }
`;

const BarButton = styled.div`
  margin: 0 20px;
  button:hover {
    background-color: rgba(100, 100, 100, 0.5);
  }
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8px;
  input {
    background-color: rgba(15, 15, 15);
    border-radius: 25px 0px 0px 25px;
    width: 480px;
    height: 100%;
    border: 1px solid #464646;
    padding: 15px;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    &::placeholder {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
    }
  }
  #search-button {
    height: 40px;
    padding: 0px 25px;
    background-color: rgba(34, 34, 34);
    border-radius: 0px 20px 20px 0px;
    font-size: 1.2rem;
    color: #ccc;
    border: 1px solid #464646;
    cursor: pointer;
  }
  #clear-button{
    background: rgb(15,15,15);
    border: none;
    padding-top: 4px;
    margin-bottom: 1px;
    border-radius: 50%;
    font-size: 1.3rem;
    position: absolute;
    margin-left: 400px;
    cursor: pointer;
    &:hover{
      background: rgba(255,255,255,.2);
    }
  }
`;

const MainSearch = styled.div`
  display: flex;
  align-items: center;
  #mic {
    padding: 10px;
    font-size: 1.3em;
    background-color: #4a4a4a33;
    color: #e1e1e1;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  #keyboard {
    position: absolute;
    color: #ccc;
    transition: all .05s ease-in;
    &:hover {
      color: #f4f4f4;
      cursor: pointer;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: right;
  #button-default {
    color: white;
    margin-left: 20px;
    width: 40px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  #profile-icon{
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
    padding: 0;
    cursor: pointer;
    margin-right: 15px;
  }
`;

export default function Topbar() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {setSearch(e.target.value)};
  const handleClear = e => {setSearch('')}

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Main>
      <ButtonAndLogo>
        <BarButton>
          <IconButton>
            <HiBars3
              style={{
                fontSize: "1em",
                padding: "0px 0px",
                margin: "0px 0px",
                color: "white",
              }}
            />
          </IconButton>
        </BarButton>
        <YoutubeLogo>
          <img src={ytLogo} alt="" width="50px" />
          <h3>Youtube</h3>
        </YoutubeLogo>
      </ButtonAndLogo>
      <MainSearch>
        <SearchBar>
          <input
            type="text"
            value={search}
            placeholder="Pesquisar"
            onChange={handleChange}
          />
          <BsFillKeyboardFill
            id="keyboard"
            style={{ marginLeft: search.length > 0 ? "340px" : "390px" }}
          />
          <button type="reset" id="clear-button" style={{display: search.length > 0 ? 'block' : 'none' }} onClick={handleClear}>
            <MdOutlineClear/>
          </button>
          <button id="search-button">
            <IoSearchOutline></IoSearchOutline>
          </button>
        </SearchBar>
        <div style={{ marginLeft: "10px" }}>
          <Tooltip title="Pesquisar com sua voz">
            <IconButton id="mic">
              <BsFillMicFill />
            </IconButton>
          </Tooltip>
        </div>
      </MainSearch>
      <Profile>
        <Tooltip title="Criar">
          <IconButton id="button-default">
            <IoVideocamOutline />
          </IconButton>
        </Tooltip>
        <Tooltip title="Notificações">
          <IconButton id="button-default">
            <AiOutlineBell />
          </IconButton>
        </Tooltip>
        <Tooltip title="Perfil">
          <IconButton style={{padding: 0}}
             id="fade-button"
             aria-controls={open ? 'fade-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
          >
            <Avatar id="profile-icon">P</Avatar>
          </IconButton>
        </Tooltip>
      </Profile>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        sx={{color: 'text.disabled'}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Main>
  );
}

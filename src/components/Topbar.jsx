import React, { useState } from "react";
import styled from "styled-components";

import ytLogo from "../assets/youtube-icon.svg";

import { HiBars3, HiLanguage } from "react-icons/hi2";
import {
  IconButton,
  Tooltip,
  Avatar,
  Button
} from "@mui/material";
import { IoSearchOutline, IoVideocamOutline } from "react-icons/io5";
import {
  BsFillMicFill,
  BsFillKeyboardFill,
  BsPersonSquare,
  BsGearFill,
  BsShieldShaded
} from "react-icons/bs";
import { AiOutlineBell, AiOutlineQuestionCircle, AiOutlineGoogle } from "react-icons/ai";
import {
  MdOutlineClear,
  MdLogout,
  MdAttachMoney,
  MdLanguage,
  MdOutlineFeedback,
} from "react-icons/md";

import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

const Main = styled.div`
  margin: 0px;
  z-index: 2;
  position: fixed;
  padding: 5px 0px;
  border-bottom: 1px solid rgb(15, 15, 15);
  background-color: rgb(15, 15, 15);
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
    font-family: "Roboto", sans-serif;
    &::placeholder {
      font-family: "Roboto", sans-serif;
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
  #clear-button {
    background: rgb(15, 15, 15);
    border: none;
    padding-top: 4px;
    margin-bottom: 1px;
    border-radius: 50%;
    font-size: 1.3rem;
    position: absolute;
    margin-left: 400px;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
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
    transition: all 0.05s ease-in;
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
  #profile-icon {
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
    padding: 0;
    cursor: pointer;
    margin-right: 15px;
  }
`;

const BoxProfile = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 15px;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, #2d2d2d 0%, #2b2b2b 5%, #2d2d2d 100%);
  box-shadow: 0 0 20px #2a2a2a;
`;

const ProfileLine = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  font-size: 1.4em;
  align-items: center;
  p {
    font-size: 1rem;
    margin: 0;
    margin-left: 20px;
  }
  &:hover {
    background-color: #434242;
    cursor: pointer;
  }
`;

export default function Topbar() {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleClear = (e) => {
    setSearch("");
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <button
            type="reset"
            id="clear-button"
            style={{ display: search.length > 0 ? "block" : "none" }}
            onClick={handleClear}
          >
            <MdOutlineClear />
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
          <IconButton style={{ padding: 0 }} onClick={handleOpen}>
            <Avatar id="profile-icon"></Avatar>
          </IconButton>
        </Tooltip>
      </Profile>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableScrollLock={true}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <BoxProfile >
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <Avatar style={{ marginRight: "10px" }}></Avatar>
              <div style={{textAlign: 'left'}}>
                <Typography id="transition-modal-title" variant="h6" component="h2" style={{marginBottom: '10px'}}>
                  Faça login ou se cadastre!
                </Typography>
                <div style={{marginBottom: '10px'}}>
                  <Button variant="outlined" style={{marginRight: '10px'}}>Login</Button>
                  <Button variant="outlined">Register</Button>
                  <Button variant="contained" style={{padding: '11px', marginLeft: '10px'}}><AiOutlineGoogle/></Button>
                </div>
                <div style={{marginBottom: '10px'}}>

                </div>
              </div>
            </div>
            <hr />
            <ProfileLine>
              <BsPersonSquare />
              <p>Crie seu canal</p>
            </ProfileLine>
            <ProfileLine>
              <MdLogout />
              <p>Sair</p>
            </ProfileLine>
            <hr />
            <ProfileLine>
              <MdAttachMoney />
              <p>Compras e assinaturas</p>
            </ProfileLine>
            <ProfileLine>
              <HiLanguage />
              <p>Linguagem: Português</p>
            </ProfileLine>
            <ProfileLine>
              <MdLanguage />
              <p>Local: Brasil</p>
            </ProfileLine>
            <ProfileLine>
              <BsShieldShaded/>
              <p>Modo restrito: Ativado</p>
            </ProfileLine>
            <hr />
            <ProfileLine>
              <BsGearFill />
              <p>Configurações</p>
            </ProfileLine>
            <hr />
            <ProfileLine>
              <AiOutlineQuestionCircle />
              <p>Ajuda</p>
            </ProfileLine>
            <ProfileLine>
              <MdOutlineFeedback />
              <p>Feedback</p>
            </ProfileLine>
          </BoxProfile>
        </Fade>
      </Modal>
    </Main>
  );
}

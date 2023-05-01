import React, { useState } from 'react'
import logo from './logo.png'
import './navbar.scss'
import { Link } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import GridViewIcon from '@mui/icons-material/GridView';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FlareIcon from '@mui/icons-material/Flare';


import { useGlobalContext } from '../../Context';

function Navbar() {

  const { modeChange, currentUser, mode } = useGlobalContext();

  return <div className="navbar" style={mode ? { backgroundColor: "#03001C", color: "lightgray", borderBottomColor: "white" } : { backgroundColor: "whitesmoke", borderBottomColor: "bleck" }}>
    <div className="left">
      <Link to="/">
        <img src={logo} />
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <HomeIcon className='icon' />
      </Link>
      {mode ? <FlareIcon className='icon' onClick={modeChange} /> :
        <NightsStayIcon className='icon' onClick={modeChange} />
      }
      <GridViewIcon className='icon' />
      <div className="search">
        <SearchIcon className='icon' />
        <input type="text" placeholder='Search' />
      </div>
    </div>
    <div className="right">
      <div className="icons">
        <SelfImprovementIcon className='icon' />
        <MarkunreadIcon className='icon' />
        <NotificationsActiveIcon className='icon' />
      </div>
      <div className="profile">
        <img src={currentUser.profilePic} />
        <span>{currentUser.name}</span>
      </div>
    </div>
  </div>
}

export default Navbar

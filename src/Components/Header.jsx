import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import '../css/Header.css'
const Header = () => {

    return (
        <>
            <div className='header'>
                <div className="header__left">
                    <IconButton>
                        <ReorderIcon>  </ReorderIcon>
                    </IconButton>
                    <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" style={{ width: '100px' }} alt="" />
                </div>
                <div className="header__middle">
                    <div className='search_mail'>
                        <IconButton>
                            <SearchIcon></SearchIcon>
                        </IconButton>
                        <input type="text" placeholder='Search in mail' />
                        <IconButton>
                            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
                        </IconButton>
                    </div>

                </div>
                <div className="header__right">
                    <IconButton>
                        <HelpOutlineIcon></HelpOutlineIcon>
                    </IconButton>

                    <IconButton>
                        <SettingsIcon></SettingsIcon>
                    </IconButton>

                    <IconButton>
                        <AppsIcon></AppsIcon>
                    </IconButton>
                    <Avatar title="Abul kaish" src='https://lh3.googleusercontent.com/ogw/AGvuzYZ38W8wocELuUeRapT6y176csftFa0I9VNbHxA_=s32-c-mo' />
                </div>
            </div>
        </>
    )
}

export default Header
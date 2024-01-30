import React from 'react'
import { Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import '../css/Sidebar.css';
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
// import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; 
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';
const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className='sidebar'>
                <Button startIcon={<CreateIcon></CreateIcon>} className='compose__button' onClick={()=> dispatch(openSendMessage())}>Compose</Button>
                <Sidebaroptions Icon={InboxIcon} title={"Inbox"} number="224" isactive={"active"} />
                <Sidebaroptions Icon={StarBorderIcon} title={"Starred"} number="224" />
                <Sidebaroptions Icon={WatchLaterIcon} title={"Snoozed"} number="224" />
                {/* <Sidebaroptions Icon={LabelImportantIcon} title={"category"} number="224" /> */}
                <Sidebaroptions Icon={SendIcon} title={"Sent"} number="224" />
                <Sidebaroptions Icon={DraftsIcon} title={"Drafts"} number="224" />
                <Sidebaroptions Icon={DeleteIcon} title={"Trash"} number="224" />
                <Sidebaroptions Icon={FindInPageIcon} title={"Documents"} number="224" />
                <Sidebaroptions Icon={ExpandMoreIcon} title={"More"} number="" />
               
                <h3 className='sidebaroptions__heading'>
                    Meet
                </h3>
                <Sidebaroptions Icon={VideoCameraBackIcon} title={"New Meeting"} number="224" />
                <Sidebaroptions Icon={KeyboardIcon} title={"Join a meeting"} number="224" />








            </div>
        </>
    )
}

export default Sidebar
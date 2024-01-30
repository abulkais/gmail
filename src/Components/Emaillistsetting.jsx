import React from 'react'
import '../css/Emaillist.css';
import { IconButton } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Emaillistsetting = () => {
    return (
        <>
            <div className='emaillist__setings'>
                <div className='emaillist__setingsleft'>
                    <IconButton>
                        <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
                    </IconButton>

                    <IconButton>
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                    </IconButton>

                    <IconButton>
                        <RefreshIcon></RefreshIcon>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>

            
                </div>
                <div className='emaillist__setingsright'>
                    <p>1-50 of 10,22</p>
                    <IconButton>
                        <ChevronLeftIcon></ChevronLeftIcon>
                    </IconButton>


                    <IconButton>
                        <ChevronRightIcon></ChevronRightIcon>
                    </IconButton>
                </div>
            </div>
        </>
    )
}

export default Emaillistsetting
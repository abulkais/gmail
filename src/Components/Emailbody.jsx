import React from 'react'
import '../css/Emaillist.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
const Emailbody = ({name, subject, message, time}) => {
    return (
        <>
            <div className='emailbody'>
                <div className='emailbody__left'>
                    <CheckBoxOutlineBlankIcon />
                    <StarBorderIcon />
                    <LabelIcon />
                    <h4>{name}</h4>
                </div>
                <div className='emailbody__middle'>
                    <div className="emailbody__middle_msg">
                        <p><b>{subject}</b>{message}</p>
                    </div>
                </div>
                <div className='emailbody__right'>
                    <p>{time}</p>
                </div>
            </div>
        </>
    )
}

export default Emailbody
import React from 'react'
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import '../css/Emaillist.css';

const Emailtype = () => {
    return (
        <>
            <div className='emailtype'>
                <div className='emailtype__options emailtype__options--active'>
                    <InboxIcon />
                    <p>Primary</p>
                </div>
                <div className='emailtype__options'>
                    <LocalOfferIcon />
                    <p>Social</p>
                </div>
                <div className='emailtype__options'>
                    <PeopleIcon />
                    <p>Promotions</p>
                </div>

                <div className='emailtype__options'>
                    <InfoOutlinedIcon />
                    <p>Updates</p>
                </div>
                <div className='emailtype__options'>
                    <QuestionAnswerOutlinedIcon />
                    <p>Forums</p>
                </div>
            </div>
        </>
    )
}

export default Emailtype
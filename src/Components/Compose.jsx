import React, { useState } from 'react'
import '../css/Compose.css'

import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'; 
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PhotoIcon from '@mui/icons-material/Photo';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';

import { db } from '../firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const formSubmit = (e) => {
    e.preventDefault();
    // alert(`Name is ${to}.subject is ${subject}.`)
    if (to === "") {
      return alert("To is required");
    } else if (subject === "") {
      return alert("Subject is Required");
    } else if (message === "") {
      return alert("Message is Required");
    }
    db.collection("emails").add({
      to: to,
      subject: subject,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setTo("");
    setSubject("");
    setMessage("");
    alert("Email send successfully");
    dispatch(closeSendMessage());
  }

  const dispatch = useDispatch();
  return (
    <>
      <div className='compose'>
        <div className='compose__header'>
          <div className='compose__header__left'>
            <span>New Message</span>
          </div>
          <div className='compose__header__right'>
            <RemoveIcon />
            <HeightIcon />
            <CloseIcon onClick={() => dispatch(closeSendMessage())} />
          </div>
        </div>
        <form onSubmit={formSubmit}>
          <div className='compose__body'>
            <div className='compose__bodyform'>
              <input type="email" placeholder='Reciepients' value={to} onChange={(e) => setTo(e.target.value)} required />
              <input type="text" placeholder='Subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
              <textarea rows="20" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
          </div>
          <div className='compose__footer'>
            <div className='compose__footerleft'>
              <button type='submit' >Send <ArrowDropDownIcon /></button>
            </div>

            <div className='compose__footerright'>
              <FormatColorTextIcon />
              <AttachFileIcon />
              <LinkIcon />
              <InsertEmoticonIcon />
              <AddToDriveIcon />
              <PhotoIcon />

              <CreateIcon />
              <MoreVertIcon />
              <DeleteIcon />
            </div>
          </div>
        </form>

      </div>
    </>
  )
}

export default Compose;
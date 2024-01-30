import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Emaillist from './Components/Emaillist';
import Compose from './Components/Compose';
import { useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';
import EmailDetails from './Components/EmailDetails';

function App() {
  const isMessageOpen = useSelector(selectsendMessageIsOpen);
  console.log(isMessageOpen);
  return (
    <>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Emaillist />
        <EmailDetails/>
      </div>

      {
        isMessageOpen && <Compose />
      }


    </>
  );
}

export default App;

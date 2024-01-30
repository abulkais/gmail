import React, { useEffect, useState } from 'react'
import '../css/Emaillist.css';

import Emaillistsetting from './Emaillistsetting';
import Emailtype from './Emailtype';
import Emailbody from './Emailbody';
import { db } from '../firebase';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

const Emaillist = () => {
    const [email, setEmail] = useState([]);
    useEffect(() => {

        db.collection("emails").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setEmail(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, []);
    console.log(email);
    return (
        <>
            <div className='emaillist'>
                <Emaillistsetting />
    
                <Emailtype />
                {
                    email.map(({ id, data }) => {

                        return (
                            <>
                                <Emailbody key={id} name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString()} />
                            </>
                        )
                    })
                }



            </div>
        </>
    )
}

export default Emaillist
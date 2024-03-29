import React from 'react'
import '../css/Sidebaroptions.css';
const Sidebaroptions = ({ Icon, title, number,isactive }) => {
    return (
        <>
            <div className={`sidebaroptions ${isactive && 'sidebaroptions--active'}`}>
                <Icon />
                <h4>{title}</h4>
                <p>{number}</p>
            </div>

           
        </>
    )
}

export default Sidebaroptions
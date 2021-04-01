import React from 'react'
import Btn from './Btn'
import { NavLink } from "react-router-dom";
function ContactMe() {
    const btnName = {
        riepilogo: 'RIEPILOGO',
        invia: 'INVIA',
    }
    return (
        <div className='ContactMe'>
            <div className='generalWrapper'>

          <NavLink to="/recap" className="navLink">
          <Btn btnName={btnName.riepilogo} />
        </NavLink>
          <NavLink to="/" className="navLink">
          <Btn btnName={btnName.invia} />
        </NavLink>
            </div>
        </div>
    )
}

export default ContactMe

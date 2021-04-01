import React from 'react'
import Btn from './Btn'
import Car from './Car'
import { NavLink } from "react-router-dom";
function Recap() {
    const btnName = {
        personalizza: 'PERSONALIZZA',
        contattami: 'CONTATTAMI',
    }
    return (
        <div className='Recap'>
            <div className="generalWrapper">

            <Car/>
            <NavLink to="/customize" className="navLink">
          <Btn btnName={btnName.personalizza} />
        </NavLink>
           <NavLink to="/contactme" className="navLink">
          <Btn btnName={btnName.contattami} />
        </NavLink>

            </div>
        </div>
    )
}

export default Recap

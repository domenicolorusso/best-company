import React from 'react'

function SingleBtn(props) {
  const { isOff, setIsOff} = props
    return (
        <div className='SingleBtn'>
            {isOff ? <button type='button' className={props.class} disabled>{props.btnNames}</button> :
            <button type='button' className={props.class}>{props.btnNames}</button>
            }
            
        </div>
    )
}

export default SingleBtn

import React from 'react'

function SingleBtn(props) {
  const { isOff } = props
    return (
        <div className='SingleBtn'>
            {isOff ? <button type='button' className={props.class} disabled={isOff}>{props.btnNames}</button> :
            <button type='button' className={props.class}>{props.btnNames}</button>
            }
            
        </div>
    )
}

export default SingleBtn

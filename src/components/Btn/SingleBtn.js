import React from 'react'

function SingleBtn(props) {
  const { isOff, buttonType,  btnNames, btnClass } = props
    return (
        <div className='SingleBtn'>
            {isOff ? <button type={buttonType} className={btnClass} disabled={isOff}>{btnNames}</button> :
            <button type={buttonType} className={btnClass}>{btnNames}</button>
            }
            
        </div>
    )
}

export default SingleBtn

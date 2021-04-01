import React from 'react'

function SingleBtn(props) {
  
    return (
        <div className='SingleBtn'>
            <button type='button'>{props.btnNames}</button>
        </div>
    )
}

export default SingleBtn

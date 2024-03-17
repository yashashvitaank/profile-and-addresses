import React from 'react'

function Button(props) {
  return (
    <button className='py-1 px-3 text-center bg-blue-500 text-white  text-sm rounded sm:text-lg' onClick={props.onClick}>
        {props.name}
    </button>
  )
}

export default Button
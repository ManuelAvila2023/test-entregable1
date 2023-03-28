import React from 'react'
import "./styles/Button.css"

const Button = ({handleNewQuote}) => {
  return (
    <button className='button' onClick={handleNewQuote}> Ver otro</button>
  )
}

export default Button

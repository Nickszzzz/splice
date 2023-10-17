import React from 'react'

const Button = ({type, children}) => {
  return (
    <a href="#" className={`button button-${type}`}>{children}</a>
  )
}

export default Button

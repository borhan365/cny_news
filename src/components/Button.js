import React from 'react'
import { Link } from 'react-router-dom'

function Button({title, variant, path}) {
  return (
    <Link to={`${path}`}>
      <button className={`button ${variant}`}>{title}</button>
    </Link>
  )
}

export default Button
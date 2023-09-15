import React from 'react'

function Message({children, variant}) {
  return (
    <div className={`message ${variant}`}>{children}</div>
  )
}

export default Message
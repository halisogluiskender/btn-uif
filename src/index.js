import React from 'react'
export const Button = (props) => {
  return (
    <button {...props}>
      <span>{props.text}</span>
    </button>
  )
}

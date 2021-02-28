import React from 'react'
import clsx from 'clsx'

const Button = (props) => {
  return (
    <button className={`button ${clsx({
      'button--outline': props.outlined
    })}`}>
      {props.children}
    </button>
  )
}

export default Button

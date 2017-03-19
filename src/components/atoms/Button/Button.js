import React from 'react'
import { Button as BaseButton } from 'react-toolbox/lib/button/Button'
import styles from './Button.css'

const Button = (props) => {
  return <BaseButton theme={styles} {...props} />
}

export default Button

import React, { PropTypes } from 'react'
import { Input as BaseInput } from 'react-toolbox/lib/input/Input'
import styles from './Input.css'

const Input = ({ ...props }) => {
  return <BaseInput theme={styles} {...props} />
}

export default Input

/**
 * Main menu bar
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import React from 'react';
import { AppBar as BaseBar } from 'react-toolbox/lib/app_bar/AppBar'

import styles from './AppBar.css'

const Input = ({ ...props }) => {
  return <BaseBar theme={styles} {...props} />
}

export default Input

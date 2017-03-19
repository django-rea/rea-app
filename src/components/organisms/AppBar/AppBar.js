/**
 * Main menu bar
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import React from 'react'
import { AppBar as BaseBar } from 'react-toolbox/lib/app_bar/AppBar'
import Navigation from 'react-toolbox/lib/navigation'

import Link from 'components/atoms/Link'
import { Checkbox, Person } from 'components/icons'

import styles from './AppBar.css'

const Input = ({ ...props }) => (
  <BaseBar theme={styles} {...props}>
    <Navigation type='horizontal'>
      <Link href='/tasks' label='My tasks' icon={<Checkbox />} />
      <Link href='/profile' label='Profile' icon={<Person />} />
    </Navigation>
  </BaseBar>
)

export default Input

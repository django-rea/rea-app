/**
 * Main menu bar
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import React from 'react'
import { appBarFactory } from 'react-toolbox/lib/app_bar/AppBar'
import Navigation from 'react-toolbox/lib/navigation'

import Link from 'components/atoms/Link'
import IconButton from 'components/atoms/IconButton'
import { Checkbox, Person, Menu } from 'components/icons'

import styles from './AppBar.css'

const BaseBar = appBarFactory(IconButton)

const AppBar = ({ ...props }) => (
  <BaseBar theme={styles} {...props} title="OCP" leftIcon={<Menu fill="white" />}>
    <Navigation type='horizontal'>
      <Link href='/tasks' label='My tasks' icon={<Checkbox fill="white" style={{ verticalAlign: "top" }} />} className="white" />
      <Link href='/profile' label='Profile' icon={<Person fill="white" style={{ verticalAlign: "top" }} />} className="white" />
    </Navigation>
  </BaseBar>
)

export default AppBar

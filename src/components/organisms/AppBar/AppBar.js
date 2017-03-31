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

import NavLink from 'components/molecules/NavLink'
import IconButton from 'components/atoms/IconButton'
import { Checkbox, Person, Menu } from 'components/icons'

const BaseBar = appBarFactory(IconButton)

const AppBar = ({ ...props }) => (
  <BaseBar {...props} title="OCP" leftIcon={<Menu fill="white" />}>
    <Navigation type='horizontal'>
      <NavLink href="/tasks" icon={<Checkbox />} labelText="top_menu.tasks" />
      <NavLink href="/profile" icon={<Person />} labelText="top_menu.profile" />
    </Navigation>
  </BaseBar>
)

export default AppBar

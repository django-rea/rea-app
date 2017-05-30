/**
 * Main menu bar
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 */

import * as React from 'react'
import { appBarFactory } from 'react-toolbox/lib/app_bar/AppBar'
import Navigation from 'react-toolbox/lib/navigation'

import NavLink from '../../molecules/NavLink'
import IconButton from '../../atoms/IconButton'
import { Checkbox, Person, Menu } from '../../icons'

const BaseBar = appBarFactory(IconButton)

const AppBar = ({ ...props }) => (
  <BaseBar {...props} title="OCP" leftIcon={<Menu fill="white" />}>
    <Navigation type='horizontal'>
      <NavLink href="/tasks" icon={<Checkbox />} labelText="topMenu.tasks" />
      <NavLink href="/profile" icon={<Person />} labelText="topMenu.profile" />
    </Navigation>
  </BaseBar>
)

export default AppBar

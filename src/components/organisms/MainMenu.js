/**
 * Main Menu (left panel)
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import type { Router } from 'react-router'

import React from 'react'
import { withRouter } from 'react-router'

import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox/lib/menu'
import { Checkbox, Person, Group, Exit } from 'components/icons'

type Props = {
  router: Router,
};

const routeTo = (router) => (url: string) => () => {
  router.push(url)
}

const MainMenu = withRouter(({ router }: Props) => {
  const navTo = routeTo(router)

  return (
    <div>
      <MenuItem onClick={navTo('/tasks')} icon={<Checkbox style={{ verticalAlign: 'top' }} />} caption='Tasks' />
      <MenuItem onClick={navTo('/projects')} icon={<Group style={{ verticalAlign: 'top' }} />} caption='Projects' />
      <MenuItem onClick={navTo('/profile')} icon={<Person style={{ verticalAlign: 'top' }} />} caption='Profile' />
      <MenuDivider />
      <MenuItem onClick={navTo('/signout')} icon={<Exit style={{ verticalAlign: 'top' }} />} caption='Sign out' />
    </div>
  )
})

export default MainMenu

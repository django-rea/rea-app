/**
 * Main Menu (left panel)
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 */

import { Router } from 'react-router';

import * as React from 'react';
import T from 'i18n-react';
import { withRouter } from 'react-router';

import { MenuItem, MenuDivider } from 'react-toolbox/lib/menu';
import { FreedomCoopLogo, Checkbox, Person, Group, Exit } from '../../icons';

interface Props {
  router: Router,
};

const routeTo = (router) => (url: string) => () => {
  router.push(url)
}

const MainMenu = withRouter(({ router }: Props) => {
  const navTo = routeTo(router)

  return (
    <div>
      <div><FreedomCoopLogo width="100px" height="100px" style={{ verticalAlign: 'middle' }} /><strong style={{ fontSize: '1.5em' }}>{T.translate('navMenu.shortTitle')}</strong></div>
      <MenuItem onClick={navTo('/tasks')} icon={<Checkbox style={{ verticalAlign: 'top' }} />} caption={`${T.translate('navMenu.tasks')}`} />
      <MenuItem onClick={navTo('/projects')} icon={<Group style={{ verticalAlign: 'top' }} />} caption={`${T.translate('navMenu.projects')}`} />
      <MenuItem onClick={navTo('/profile')} icon={<Person style={{ verticalAlign: 'top' }} />} caption={`${T.translate('navMenu.profile')}`} />
      <MenuDivider />
      <MenuItem onClick={navTo('/signout')} icon={<Exit style={{ verticalAlign: 'top' }} />} caption={`${T.translate('navMenu.signout')}`} />
    </div>
  )
})

export default MainMenu

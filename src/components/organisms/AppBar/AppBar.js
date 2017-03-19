/**
 * Main menu bar
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import React from 'react'
import T from 'i18n-react'
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
      <Link href='/tasks' className="white" activeClassName="active" style={{ marginLeft: '0.8em' }}>
        <Checkbox fill="white" style={{ verticalAlign: "middle", marginRight: '0.3em' }} />
        <T.text text="top_menu.tasks" />
      </Link>
      <Link href='/profile' className="white" activeClassName="active" style={{ marginLeft: '0.8em' }}>
        <Person fill="white" style={{ verticalAlign: "middle", marginRight: '0.3em' }} />
        <T.text text="top_menu.profile" />
      </Link>
    </Navigation>
  </BaseBar>
)

export default AppBar

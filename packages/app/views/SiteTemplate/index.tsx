/**
 * Main site template- toplevel container for app area, side panels, header / footer etc
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 */

import * as React from 'react'
import { Component, ReactElement } from 'react'

import AuthenticatedOnly from '@vflows/bindings/AuthenticatedOnly'

// import { Layout, NavDrawer, Panel } from '@vflows/views/templates/Layout'

import Header from '@vflows/views/organisms/Header'
import Aside from '@vflows/views/organisms/Aside'
import Sidebar from '@vflows/views/organisms/Sidebar'
import SecondaryMenu from '@vflows/views/organisms/SecondaryMenu'

import Overview from '@vflows/views/organisms/Overview'
import Members from '@vflows/views/organisms/Members'
import List from '@vflows/views/organisms/List'


import LoginPage from '../../pages/Login'

export interface Props {
  children?: ReactElement<any>,
}

interface State {
  // drawerActive: false,
  // drawerPinned: false,
  // sidebarPinned: false,
}

class SiteTemplate extends Component<Props, State> {
  state = {}

  // toggleDrawerActive() {
  //   this.setState(Object.assign(this.state, { drawerActive: !this.state.drawerActive }))
  // }

  // toggleDrawerPinned() {
  //   this.setState(Object.assign(this.state, { drawerPinned: !this.state.drawerPinned }))
  // }

  // toggleSidebar() {
  //   this.setState(Object.assign(this.state, { sidebarPinned: !this.state.sidebarPinned }))
  // }

  renderSite() {
    return (
      /*<Layout>
        <Panel>
          <Header />
          {this.props.children}
        </Panel>
      </Layout>*/
      <div>
        <Header />
        <Aside />
        <Sidebar />
        <article>
          <SecondaryMenu />
          <Overview />
          <Members />
          <List />
        </article>
        {/*{this.props.children}*/}
      </div>
    )
  }

  render() {
    return (
      <AuthenticatedOnly unauthenticatedComponent={<LoginPage />}>
        {this.renderSite()}
      </AuthenticatedOnly>
    )
  }
}

export default SiteTemplate

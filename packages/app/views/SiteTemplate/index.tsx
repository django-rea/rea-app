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

import { Layout, NavDrawer, Sidebar, Panel } from '@vflows/views/templates/Layout'
import MainMenu from '@vflows/views/organisms/MainMenu'
import AppBar from '@vflows/views/organisms/AppBar'

import LoginPage from '../../pages/Login'

export interface Props {
  children?: ReactElement<any>,
}

interface State {
  drawerActive: false,
  drawerPinned: false,
  sidebarPinned: false,
}

class SiteTemplate extends Component<Props, State> {
  state = {}

  toggleDrawerActive() {
    this.setState(Object.assign(this.state, { drawerActive: !this.state.drawerActive }))
  }

  toggleDrawerPinned() {
    this.setState(Object.assign(this.state, { drawerPinned: !this.state.drawerPinned }))
  }

  toggleSidebar() {
    this.setState(Object.assign(this.state, { sidebarPinned: !this.state.sidebarPinned }))
  }

  renderSite() {
    return (
      <Layout>
        <NavDrawer active={this.state.drawerActive}
          pinned={this.state.drawerPinned} permanentAt="xxxl"
          onOverlayClick={() => this.toggleDrawerActive()}
        >
          <MainMenu />
        </NavDrawer>
        <Panel>
          <AppBar leftIcon="menu" onLeftIconClick={() => this.toggleDrawerActive()} />
          {this.props.children}
        </Panel>
        <Sidebar pinned={this.state.sidebarPinned} width={5}>
          { /*
          <div><IconButton icon='close' onClick={() => this.toggleSidebar()}/></div>
          -- SIDEBAR CONTENT (context menu for row items) --
          */ }
        </Sidebar>
      </Layout>
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

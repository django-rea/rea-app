/**
 * Main site template- toplevel container for app area, side panels, header / footer etc
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import type { Element } from 'react';

import React, { Component } from 'react'

import { Layout, NavDrawer, Sidebar, Panel } from 'components/templates/Layout'
import MainMenu from 'components/organisms/MainMenu'
import AppBar from 'components/organisms/AppBar'

type Props = {
  children: Element<*>,
};

class SiteTemplate extends Component {
  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false,
  };

  props: Props;

  toggleDrawerActive() {
    this.setState({ drawerActive: !this.state.drawerActive })
  }

  toggleDrawerPinned() {
    this.setState({ drawerPinned: !this.state.drawerPinned })
  }

  toggleSidebar() {
    this.setState({ sidebarPinned: !this.state.sidebarPinned })
  }

  render() {
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
}

export default SiteTemplate

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
const styles = require('./siteTemplate.css')

export interface Props {
  children?: ReactElement<any>,
}

interface State {
}

class SiteTemplate extends Component<Props, State> {
  state = {}

  renderSite() {
    return (
      <div>
        <Header />
        {this.props.children}
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

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

import MembersBig from '@vflows/views/organisms/MembersBig'

import LoginPage from '../../pages/Login'
import Contributions from '../../pages/Contributions'

export interface Props {
  children?: ReactElement<any>,
}

interface State {
}

class SiteTemplate extends Component<Props, State> {
  state = {}

  renderSite(id) {
    return (
      <div>
        <Header id={id} />
        <Aside />
        <article>
          {this.props.children}
        </article>
      </div>
    )
  }

  render() {
    return (
      <AuthenticatedOnly unauthenticatedComponent={<LoginPage />}>
        {this.renderSite(this.props.children.props.params.id)}
      </AuthenticatedOnly>
    )
  }
}

export default SiteTemplate

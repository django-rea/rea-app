/**
 * Root application component
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 */

import { ReactElement } from 'react'

import * as React from 'react'
import {Component} from 'react'
import * as Helmet from 'react-helmet'

import SiteTemplate from '../views/SiteTemplate'

const { assetUrl } = require('../config')

require('./AppGlobals.scss')

export interface Props {
  children: ReactElement<any>,
  showModal: any
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false,
      modalId: null
    }
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.handleOpenModal = this.handleOpenModal.bind(this)
  }

  handleOpenModal (id) {
    this.setState({
      showModal: true,
      modalId: id
    });
  }

  handleCloseModal () {
    this.setState({
      showModal: false,
      modalId: null
    });
  }

  render () {
  return (
    <div>
      <Helmet
        title="FreedomCoop OCP"
        titleTemplate="FreedomCoop OCP - %s"
        meta={[
          { name: 'description', content: '' },
          { property: 'og:site_name', content: 'FreedomCoop OCP' },
          // :TODO: finalise default share image
          { property: 'og:image', content: `${assetUrl}/images/FreedomCoop_vertical_4c.png` },
          { property: 'og:image:type', content: 'image/png' },
          { property: 'og:image:width', content: '679' },
          { property: 'og:image:height', content: '338' },
        ]}
        link={[
          { rel: 'icon', href: `${assetUrl}/favicon.png` },
        ]}
      />
      <SiteTemplate>
        {React.cloneElement(this.props.children, {
            // MODAL
            showModal: this.state.showModal,
            handleOpenModal: this.handleOpenModal,
            handleCloseModal: this.handleCloseModal,
            modalId: this.state.modalId
          })}
      </SiteTemplate>
    </div>
  )}
}

export default App

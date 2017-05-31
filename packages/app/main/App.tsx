/**
 * Root application component
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 */

import { ReactElement } from 'react'

import * as React from 'react'
import * as Helmet from 'react-helmet'

import SiteTemplate from '../views/SiteTemplate'

const { assetUrl } = require('../config')

require('./AppGlobals.scss')

export interface Props {
  children: ReactElement<any>,
}

const App = ({ children }: Props) => {
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
        {children}
      </SiteTemplate>
    </div>
  )
}

export default App

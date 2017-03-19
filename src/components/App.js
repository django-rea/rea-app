import type { Element } from 'react'

import React from 'react'
import Helmet from 'react-helmet'

import SiteTemplate from 'components/templates/SiteTemplate'

import { assetUrl } from '../config'

import './AppGlobals.css'

type Props = {
  children: Element<*>,
};

const App = ({ children }: Props) => {
  return (
    <div>
      <Helmet
        title="FreedomCoop OCP"
        titleTemplate="FreedomCoop OCP - %s"
        meta={[
          { name: 'description', content: '' },
          { property: 'og:site_name', content: 'FreedomCoop OCP' },
          { property: 'og:image', content: `${assetUrl}/images/FreedomCoop_vertical_4c.png` }, // :TODO: finalise default share image
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

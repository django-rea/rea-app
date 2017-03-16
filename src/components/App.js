import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

import { assetUrl } from '../config'
import './AppGlobals.css'

const App = ({ children }) => {
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
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App

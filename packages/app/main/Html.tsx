/* eslint-disable react/no-danger */
import * as React from 'react'
import * as Helmet from 'react-helmet'

interface Props {
  assets: {
    styles: Array<string>,
    javascript: Array<string>,
  },
  state: string,
  content: string,
}

const Html = ({ assets, state, content }: Props) => {
  const helmet = Helmet.rewind()
  const attrs = helmet.htmlAttributes.toComponent()

  return (
    <html {...attrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {helmet.link.toComponent()}
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans:200,400,600,700" rel="stylesheet" />
        {Object.keys(assets.styles).map((style, i) =>
          <link
            href={assets.styles[style]} key={i} media="screen, projection"
            rel="stylesheet" type="text/css"
          />)}
      </head>
      <body>
        <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: state }} />
        {Object.keys(assets.javascript).reverse().map((key) =>
          <script key={key} src={assets.javascript[key]} />
        )}
      </body>
    </html>
  )
}

export default Html

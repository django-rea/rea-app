import * as React from 'react'
import * as themeable from 'react-themeable'

const Hero = ({agent, theme}) => {
  let currentTheme = themeable(theme)
  return (
    <div {...currentTheme(1, 'context_overview')}>
      <span {...currentTheme(2, 'overview_photo')}><img src={agent.image}/></span>
      <h2 {...currentTheme(3, 'overview_name')}>{agent.name}</h2>
    </div>
  )
}

export default Hero

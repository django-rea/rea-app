import * as React from 'react'

const AgentAvatar = ({currentTheme, photo, name}) => (
  <span {...currentTheme(1, 'item_image')}>
    <img src={photo} alt={name} />
  </span>
)

export default AgentAvatar

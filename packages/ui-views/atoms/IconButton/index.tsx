import * as React from 'react'
import { iconButtonFactory } from 'react-toolbox/lib/button/IconButton'
import FontIcon from 'react-toolbox/lib/font_icon/FontIcon'
import rippleFactory from 'react-toolbox/lib/ripple/Ripple'

const styles = require('../Button/index.css')

const BaseButton = iconButtonFactory(rippleFactory({ centered: true }), FontIcon)

const IconButton = (props) => {
  return <BaseButton theme={styles} {...props} />
}

export default IconButton

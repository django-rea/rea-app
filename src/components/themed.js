/**
 * Returns the provided component as themed component.
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-28
 * @flow
 */

import React from 'react'

export default (Component, theme, defaultProps = {}) => (props) => (
  <Component {...defaultProps} theme={theme} {...props} />
)

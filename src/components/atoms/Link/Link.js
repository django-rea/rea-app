/**
 * Futureproofing mountpoint for custom link behaviour, which inevitably is required later for
 * interop with some routing framework or similar..
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import React from 'react'
import { Link as BaseLink } from 'react-toolbox/lib/link'

const Link = ({ ...props }) => {
  return <BaseLink {...props} />
}

export default Link

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

import styles from './Link.css'

type Props = {
  className: string,
};

const Link = ({ className, ...props }: Props) => {
  return <BaseLink {...props} className={styles[className]} />
}

export default Link

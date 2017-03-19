/**
 * Futureproofing mountpoint for custom link behaviour, which inevitably is required later for
 * interop with some routing framework or similar..
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import type { Element } from 'react'

import React from 'react'
import { Link as BaseLink } from 'react-router'

import styles from './Link.css'

type Props = {
  className: string,
  activeClassName?: string,
  children: Element<*>,
};

const Link = ({ className, activeClassName, children, ...props }: Props) => (
  <BaseLink {...props}
    className={styles[className]}
    activeClassName={activeClassName ? styles[activeClassName] : null}
  >
    {children}
  </BaseLink>
)

export default Link

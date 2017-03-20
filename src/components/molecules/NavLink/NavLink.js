/**
 * Navigation link (for top app bar)
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-20
 * @flow
 */

import type { Element } from 'react'
import React from 'react'
import T from 'i18n-react'

import Link from 'components/atoms/Link'

import styles from './NavLink.css'

type Props = {
  icon?: Element<*>,
  href: string,
  labelText: string,  // not a raw string, should reference an i18n keyword
};

const NavLink = ({ icon, href, labelText }: Props) => (
  <Link href={href} className={styles.navLink} activeClassName={styles.active}>
    {icon} <T.text text={labelText} />
  </Link>
)

export default NavLink

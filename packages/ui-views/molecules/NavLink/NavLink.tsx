/**
 * Navigation link (for top app bar)
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-20
 */

import React, { ReactElement, SFC } from 'react'
import T from 'i18n-react'

import Link from '../../atoms/Link/Link'

interface Props {
  theme: Object,
  href: string,
  labelText: string,  // not a raw string, should reference an i18n keyword
  icon?: ReactElement<any>,
  children?: ReactElement<any>,
}

const NavLink = ({ icon, children, href, labelText, theme, ...props }: Props) => (
  <Link href={href} theme={theme} {...props}>
    {icon}{children} <T.text text={labelText} />
  </Link>
)

export default NavLink

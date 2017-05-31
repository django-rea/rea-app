/**
 * Navigation link (for top app bar)
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-20
 */

import * as React from 'react'
import { ReactElement, SFC } from 'react'
import T from 'i18n-react'

import Link from '../../atoms/Link/Link'

interface Props {
  theme: Object,
  href: string,
  labelText: string,  // not a raw string, should reference an i18n keyword
  icon?: ReactElement<any>,
  children?: ReactElement<any>,
}

const NavLink: SFC<Props> = ({ icon, children, href, labelText, theme, ...props }) => (
  <Link href={href} theme={theme} {...props}>
    {icon}{children} <T.text text={labelText} />
  </Link>
)

export default NavLink

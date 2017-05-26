/**
 * Futureproofing mountpoint for custom link behaviour, which inevitably is required later for
 * interop with some routing framework or similar..
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 */

import { ReactElement } from 'react'

import React from 'react'
import themeable from 'react-themeable'
import { Link as BaseLink } from 'react-router'

interface Props {
  theme: Object,
  href: string,
  children: ReactElement<any>,
}

const Link = ({ theme, children, href, ...props }: Props) => {
  const th = themeable(theme)
  const className = th(1, 'link').className // :SHONK: pass to themeable and back again since the react-router Link isn't themeable on its own
  const activeClassName = th(2, 'linkActive').className

  return (
    <BaseLink
      {...props}
      to={href}
      className={className}
      activeClassName={activeClassName}
    >
      {children}
    </BaseLink>
  )
}

export default Link

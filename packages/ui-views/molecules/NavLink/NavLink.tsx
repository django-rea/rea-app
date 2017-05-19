/**
 * Navigation link (for top app bar)
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-20
 */

import { Element } from 'react';
import React from 'react';
import T from 'i18n-react';

import Link from '../../atoms/Link/Link';

interface Props {
  theme: Object,
  icon?: Element,
  href: string,
  labelText: string,  // not a raw string, should reference an i18n keyword
};

const NavLink = ({ icon, href, labelText, theme, ...props }: Props) => (
  <Link href={href} theme={theme} {...props}>
    {icon} <T.text text={labelText} />
  </Link>
)

export default NavLink

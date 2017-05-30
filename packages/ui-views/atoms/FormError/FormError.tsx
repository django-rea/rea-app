/**
 * Container element for form error messages
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 */

import { ReactElement, SFC } from 'react'

import * as React from 'react'
import * as themeable from 'react-themeable'

interface Props {
  theme: Object,
  children: ReactElement<any>,
}

const FormError: SFC<Props> = ({ theme, children }) => (
  <div {...themeable(theme)(1, 'formError')}>{children}</div>
)

export default FormError

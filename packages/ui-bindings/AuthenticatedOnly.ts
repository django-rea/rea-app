/**
 * Checks whether the user is authenticated before rendering child controls
 *
 * :TODO: rewrite to use recompose helpers instead of defining a conditional component
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-02
 * @flow
 */

import type { Element } from 'react'

import { connect } from 'react-redux'
import { isLoggedIn } from '@vflows/store/selectors/auth'

export type Props = {
  isLoggedIn: boolean,
  children: ?Element<*>,
  unauthenticatedComponent: ?Element<*>,
};

const mapStateToProps = (state) => ({
  isLoggedIn: isLoggedIn(state),
})

const AuthenticatedOnly = ({ isLoggedIn, children, unauthenticatedComponent }: Props) => (
  isLoggedIn ? children : unauthenticatedComponent
)

export default connect(mapStateToProps)(AuthenticatedOnly)

/**
 * App login form
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 */

import * as React from 'react'
import { SFC } from 'react'
import { Field } from 'redux-form'
import T from 'i18n-react'

import Button from '../../atoms/Button'
import Input from '../../molecules/FormInput'
import FormError from '../../atoms/FormError'

interface Props {
  handleSubmit?: () => void,
  hasLoginError?: boolean,
  errorMessage?: string,
  submitting?: boolean,
}

const LoginForm: SFC<Props> = ({ handleSubmit, hasLoginError, errorMessage, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field name="user" type="text" component={Input} placeholder="Username" />
    <Field name="pass" type="password" component={Input} placeholder="Password" />
    <Button type="submit" raised primary disabled={submitting}><T.text text="loginForm.loginButton" /></Button>
    {hasLoginError ? (<FormError>{errorMessage}</FormError>) : null}
  </form>
)

export default LoginForm

/**
 * App login form
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-31
 * @flow
 */

import React from 'react'
import { Field } from 'redux-form'
import T from 'i18n-react'

import Button from 'components/atoms/Button'
import Input from 'components/molecules/FormInput'
import FormError from 'components/atoms/FormError'

type Props = {
  handleSubmit: () => void,
  hasLoginError: boolean,
  errorMessage: ?string,
  submitting: boolean,
};

const LoginForm = ({ handleSubmit, hasLoginError, errorMessage, submitting }: Props) => (
  <form onSubmit={handleSubmit}>
    <Field name="user" type="text" component={Input} placeholder="Username" />
    <Field name="pass" type="password" component={Input} placeholder="Password" />
    <Button type="submit" raised primary disabled={submitting}><T.text text="loginForm.loginButton" /></Button>
    {hasLoginError ? (<FormError>{errorMessage}</FormError>) : null}
  </form>
)

export default LoginForm

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

type Props = {
  handleSubmit: () => void,
};

const LoginForm = ({ handleSubmit }: Props) => (
  <form onSubmit={handleSubmit}>
    <Field name="user" type="text" component={Input} placeholder="Username" />
    <Field name="pass" type="password" component={Input} placeholder="Password" />
    <Button type="submit" raised primary><T.text text="loginForm.loginButton" /></Button>
  </form>
)

export default LoginForm

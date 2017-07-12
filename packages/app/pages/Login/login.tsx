/**
 * Login page
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 */

import * as React from 'react'

import Form from '@vflows/views/organisms/LoginForm'

import PageTemplate from '@vflows/views/templates/PageTemplate'
import * as themeable from 'react-themeable'

const LoginPage = ({theme}) => {
  let currentTheme = themeable(theme)
  return (
    <div {...currentTheme(0, 'login')}>
      <div {...currentTheme(1, 'row')}>
        <div {...currentTheme(2, 'medium-5', 'columns', 'medium-centered')}>
          <div {...currentTheme(3, 'login_logo')} />
          <div {...currentTheme(4, 'login_container')}>
            <h1 {...currentTheme(5, 'container_title')}>Log into Kamasi</h1>
            <h3 {...currentTheme(6, 'container_description')}>Start interact in your network</h3>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

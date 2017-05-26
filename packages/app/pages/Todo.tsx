/**
 * Page TODO stub
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 */

import React, { SFC } from 'react'
import T from 'i18n-react'
import PageTemplate from '@vflows/views/templates/PageTemplate'

import CurrentUser from '@vflows/bindings/user/CurrentUser'

interface UserProps {
  data?: {
    agent: {
      name: string, // :TODO: create custom HoC to help prehandle this output
    },
  },
  loading?: boolean,
  error?: Error,
}

/* eslint no-nested-ternary: 0 */
const UsernameDisplay: SFC<UserProps> = CurrentUser(({ data, loading, error }) => (
  loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> : <p>Hello, {data ? data.agent.name : 'nobody'}.</p>)
))

const Todo = () => (
  <PageTemplate>
    <h1 style={{ color: '#F0F', fontWeight: 'bold', textAlign: 'center' }}><T.text text="todo_text" /></h1>
    <UsernameDisplay />
  </PageTemplate>
)

export default Todo

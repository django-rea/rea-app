/**
 * Page TODO stub
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import React from 'react'
import T from 'i18n-react'
import PageTemplate from 'components/templates/PageTemplate'

const Todo = () => (
  <PageTemplate>
    <h1 style={{ color: '#F0F', fontWeight: 'bold', textAlign: 'center' }}><T.text text="todo_text" /></h1>
  </PageTemplate>
)

export default Todo

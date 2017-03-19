import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import HomePage from 'components/pages/HomePage'
import Todo from 'components/pages/Todo'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Todo} />

    <Route path="login" component={Todo} />
    <Route path="register" component={Todo} />

    <Route path="tasks" component={Todo}>
      <Route path="my-tasks" component={Todo} />
      <Route path="find-tasks" component={Todo} />
    </Route>

    <Route path="projects" component={Todo}>
      <IndexRoute component={Todo} />
      <Route path="my-projects" component={Todo} />
      <Route path="find-projects" component={Todo} />
    </Route>

    <Route path="profile" component={Todo}>
      <IndexRoute component={Todo} />
      <Route path="my-account" component={Todo} />
      <Route path="my-skills" component={Todo} />
    </Route>
  </Route>
)

export default routes

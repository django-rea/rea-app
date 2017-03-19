import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import App from 'components/App'
import Todo from 'components/pages/Todo'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Todo} />

    <Route path="login" component={Todo} />
    <Route path="register" component={Todo} />

    <Route path="tasks" component={Todo}>
      <IndexRedirect to="my-tasks" />
      <Route path="my-tasks" component={Todo} />
      <Route path="find-tasks" component={Todo} />
    </Route>

    <Route path="projects" component={Todo}>
      <IndexRedirect to="my-projects" />
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

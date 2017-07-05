import * as React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import App from './main/App'
import Todo from './pages/Todo'
import OverviewPage from './pages/Overview'
import MembersPage from './pages/Members'
import ProcessesPage from './pages/Processes'
import AccountsPage from './pages/Accounts'
import ProjectTemplate from '../ui-views/templates/ProjectTemplate'

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

    <Route path="projects" component={ProjectTemplate}>
        <Route path=":id" component={OverviewPage} />
        <Route path=":id/processes" component={ProcessesPage} />
        <Route path=":id/accounts" component={AccountsPage} />
        <Route path=":id/members" component={MembersPage} />
    </Route>

    <Route path="profile" component={Todo}>
      <IndexRoute component={Todo} />
      <Route path="my-account" component={Todo} />
      <Route path="my-skills" component={Todo} />
    </Route>
  </Route>
)

export default routes

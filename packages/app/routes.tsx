import * as React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import App from './main/App'
import Todo from './pages/Todo'
import Landing from './pages/Landing'
import OverviewPage from './pages/Overview'
import MembersPage from './pages/Members'
import AllProjectsPage from './pages/AllProjectsPage'
import ProcessesPage from './pages/Processes'
import InventoryPage from './pages/Inventory'
import AccountsPage from './pages/Accounts'
import SingleProjectTemplate from '../ui-views/templates/SingleProjectTemplate'
import ProjectTemplate from '../ui-views/templates/ProjectTemplate'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />

    {/* <Route path="login" component={Todo} /> */}
    {/* <Route path="register" component={Todo} /> */}

    {/* <Route path="tasks" component={Todo}>
      <IndexRedirect to="my-tasks" />
      <Route path="my-tasks" component={Todo} />
      <Route path="find-tasks" component={Todo} />
    </Route> */}

    <Route path="projects">
        <IndexRoute component={AllProjectsPage} />
        <Route path=":id" component={SingleProjectTemplate}>
          <IndexRoute component={OverviewPage} />
          <Route path="processes" component={ProcessesPage} />
          {/* <Route path="accounts" component={AccountsPage} /> */}
          <Route path="members" component={MembersPage} />
          <Route path="inventory" component={InventoryPage} />
        </Route>
    </Route>

    {/* <Route path="profile" component={Todo}>
      <IndexRoute component={Todo} />
      <Route path="my-account" component={Todo} />
      <Route path="my-skills" component={Todo} />
    </Route> */}
  </Route>
)

export default routes

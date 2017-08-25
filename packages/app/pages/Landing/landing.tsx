/**
 * Page Your Projects stub
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 */

import * as React from 'react'
import { SFC } from 'react'
import T from 'i18n-react'
import PageTemplate from '@vflows/views/templates/PageTemplate'
import CurrentUser from '@vflows/bindings/user/CurrentUser'
import * as themeable from 'react-themeable'
import { withRouter } from 'react-router'
import Link from '@vflows/views/atoms/Link'

interface UserProps {
  user?: {
    name: string,
    image: string
  },
  loading?: boolean,
  error?: Error,
  theme: Object,
  router: {
    params: {
      id: string,
    },
  },
}

const YourProjects = CurrentUser(withRouter(({ user, loading, error, theme, router }: UserProps) => {
    let currentTheme = themeable(theme)
    return (
        loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> : (
        <section {...currentTheme(1, 'landing')}>
          <div {...currentTheme(2, 'row')}>
            <div {...currentTheme(3, 'medium-5', 'medium-centered', 'columns')} >
              <div {...currentTheme(1000, 'landingContent')}>
                <h1>Hello, {user.name} 👋</h1>
                <div {...currentTheme(4, 'project_list')}>
                  <h5>Choose one of the projects of your network</h5>
                  <ul {...currentTheme(30000, 'aside_list')} >
                    {user.agentRelationships.map((item, i) => (
                    <li {...currentTheme(i + i + i + 1, 'list_item', router.isActive('projects/' + item.object.id) && 'active')} >
                        <Link href={'projects/' + item.object.id} {...currentTheme(i + i + i + 2, 'item_link')} >
                            <span {...currentTheme( i + i + i + 3, 'link_image')}>
                                <img src={item.object.image} />
                            </span>
                            <h4>{item.object.name}</h4>
                        </Link>
                    </li>
                  ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    ))
}))

export default YourProjects

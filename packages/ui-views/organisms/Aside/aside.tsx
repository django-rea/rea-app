import * as React from 'react'
import * as themeable from 'react-themeable'
import { withRouter } from 'react-router'

import BindOrgs from '@vflows/bindings/user/CurrentOrganizations'
import { AgentType } from '@vflows/bindings/agent/agent'

import Link from '../../atoms/Link'

interface OrgsProps {
  organizations: Array<AgentType>,
  loading?: boolean,
  error?: Error,
  theme: Object,
  router: {
    params: {
      id: string,
    },
  },
}

interface Props {
  theme: Object,
}

/* eslint no-nested-ternary: 0 */
const OrgsList = BindOrgs(withRouter(({ organizations, loading, error, theme, router }: OrgsProps) => {
  let currentTheme = themeable(theme)
  return (
    loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error {error.message}</p> : (
   <ul {...currentTheme(30000, 'aside_list')} >
      <h4 {...currentTheme(30001, 'list_title')}>Organizations</h4>
       {organizations.map((item, i) => (
        <li {...currentTheme(i + i + i + 1, 'list_item', router.isActive('projects/' + item.id, true) && 'active')} >
            <Link href={'projects/' + item.id} {...currentTheme(i + i + i + 2, 'item_link')} >
                <span {...currentTheme( i + i + i + 3, 'link_image')}>
                    <img src={item.image} />
                </span>
                <h4>{item.name}</h4>
            </Link>
        </li>
       ))}
    </ul>
  )))
}))

const Aside = ({ theme }: Props) => {
  let currentTheme = themeable(theme)
  return (
    <div {...currentTheme(0, 'medium-3', 'columns')}>
      <aside {...currentTheme(1000, 'aside')} >
        <OrgsList theme={theme} />
      </aside>
    </div>
  )
}

export default Aside

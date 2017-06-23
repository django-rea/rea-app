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
       {organizations.map((item, i) => (
        <li {...currentTheme(i + i + i + 1, 'list_item', router.isActive('projects/' + item.id, true) && 'active')} >
            <Link href={'projects/' + item.id} {...currentTheme(i + i + i + 2, 'item_link')} >
                <span {...currentTheme( i + i + i + 3, 'link_image')}>
                    <img src={item.image} />
                </span>
            </Link>
        </li>
       ))}
    </ul>
  )))
}))

const Aside = ({ theme }: Props) => {
  let currentTheme = themeable(theme)
  return (
      <aside {...currentTheme(1000, 'aside')} >
        <span {...currentTheme(2000, 'aside_logo')} />
        <OrgsList theme={theme} />
        <div {...currentTheme(16, 'aside_bottom')} >
            <span {...currentTheme(17, 'icon-plus')} />
        </div>
    </aside>
  )
}

export default Aside

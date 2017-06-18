import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import OrganizationsByUser from '@vflows/bindings/user/OrganizationsByUser'

interface OrgsProps {
  data?: {
    myAgent: {
      organizations: any // :TODO: create custom HoC to help prehandle this output
    },
  },
  loading?: boolean,
  error?: Error,
  theme: Object
}
interface Props {
  theme: Object
}


/* eslint no-nested-ternary: 0 */
const OrgsList: SFC<OrgsProps> = OrganizationsByUser(({ data, loading, error, theme }) => {
  let row = []
  if (data) {
    {data.myAgent.organizations.map((org, i) => row.push(
    <li {...theme(i + i + i + 1, 'list_item')} >
        <a {...theme(i + i + i + 2, 'item_link')} >
            <span {...theme( i + i + i + 3, 'link_image')}>
                <img src={org.image} />
            </span>
        </a>
    </li>
    ))
  }}
  return (
    loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> :
   <ul {...theme(30000, 'aside_list')} >
       {row}
    </ul>
  ))
})


const Aside: SFC<Props> = ({ theme }) => {
  let currentTheme = themeable(theme)
  return (
      <aside {...currentTheme(1000, 'aside')} >
        <span {...currentTheme(2000, 'aside_logo')} />
        <OrgsList theme={currentTheme} />
        <div {...currentTheme(16, 'aside_bottom')} >
            <span {...currentTheme(17, 'icon-plus')} />
        </div>
    </aside>
  )
}

export default Aside

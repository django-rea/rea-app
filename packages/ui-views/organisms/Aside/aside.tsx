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
  console.log(data)
  let row = []
  if (data) {
    data.myAgent.organizations.map((org, i) => row.push(
        <li {...theme(i +  1, 'list_item')} >
            <a {...theme(i + 2, 'item_link')} >
                <span {...theme( i + 3, 'link_image', org.image)} />
            </a>
        </li>  
    ))
  }
  return (
    loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> :
   {row}
  ))
})


const Aside: SFC<Props> = ({ theme }) => {
  let currentTheme = themeable(theme)
  return (
      <aside {...currentTheme(1000, 'aside')} >
        <span {...currentTheme(2000, 'aside_logo')} />
        <ul {...currentTheme(30000, 'aside_list')} >
            {/*<li {...currentTheme(4, 'list_item')} >
                <a {...currentTheme(5, 'item_link')} >
                    <span {...currentTheme(6, 'link_image')} />
                </a>
            </li>
            <li {...currentTheme(7, 'list_item', 'active')}>
                <a {...currentTheme(8, 'item_link')} >
                    <span {...currentTheme(9, 'link_image')} />
                </a>
            </li>
            <li {...currentTheme(10, 'list_item')} >
                <a {...currentTheme(11, 'item_link')} >
                    <span {...currentTheme(12, 'link_image')} />
                </a>
            </li>
            <li {...currentTheme(13, 'list_item')} >
                <a {...currentTheme(14, 'item_link')} >
                    <span {...currentTheme(15, 'link_image')} />
                </a>
            </li>*/}
            <OrgsList theme={currentTheme} />
        </ul>
        <div {...currentTheme(16, 'aside_bottom')} >
            <span {...currentTheme(17, 'icon-plus')} />
        </div>
    </aside>
  )
}

export default Aside

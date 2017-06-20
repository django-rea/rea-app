import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import {Link, withRouter} from 'react-router'
import { authedGraphQL } from '../../../services/api'

interface OrgsProps {
  data?: {
    myAgent: {
      organizations: any // :TODO: create custom HoC to help prehandle this output
    },
  },
  loading?: boolean,
  error?: Error,
  theme: Object,
  router: Object
}

interface Props {
  theme: Object,
  router: Object
}


const asideQuery = authedGraphQL(`
  myAgent {
     id 
     organizations {
        id
        name
        image
      }
  }
`)

/* eslint no-nested-ternary: 0 */
const OrgsList: SFC<OrgsProps> = asideQuery(({ data, loading, error, theme, router }) => {
  return (
    loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> :
   <ul {...theme(30000, 'aside_list')} >
       {data.myAgent.organizations.map((item, i) => (
        <li {...theme(i + i + i + 1, 'list_item', router.isActive('projects/' + item.id, true) && 'active')} >
            <Link to={'projects/' + item.id} {...theme(i + i + i + 2, 'item_link')} >
                <span {...theme( i + i + i + 3, 'link_image')}>
                    <img src={item.image} />
                </span>
            </Link>
        </li>
       ))}
    </ul>
  ))
})


const Aside: SFC<Props> = ({ router, theme }) => {
  let currentTheme = themeable(theme)
  return (
      <aside {...currentTheme(1000, 'aside')} >
        <span {...currentTheme(2000, 'aside_logo')} />
        <OrgsList router={router} theme={currentTheme} />
        <div {...currentTheme(16, 'aside_bottom')} >
            <span {...currentTheme(17, 'icon-plus')} />
        </div>
    </aside>
  )
}

export default withRouter(Aside)

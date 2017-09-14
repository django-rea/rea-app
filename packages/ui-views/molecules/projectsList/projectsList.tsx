import * as React from 'react'
import * as themeable from 'react-themeable'
import { withRouter } from 'react-router'
import Link from '../../atoms/Link'

/* eslint no-nested-ternary: 0 */
const OrgsList = withRouter(({ agent, theme, router }) => {
  let currentTheme = themeable(theme)
  return (
   <ul {...currentTheme(30000, 'aside_list')} >
      <h4 {...currentTheme(30001, 'list_title')}>organizations</h4>
       {agent.organizations.map((item, i) => (
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
  )
})

const Aside = withRouter(({agent, visible, theme, router }) => {
  let currentTheme = themeable(theme)
  return (
    <aside {...currentTheme(1, visible, 'aside')}>
      <ul {...currentTheme(30000, 'aside_list')} >
        <h4 {...currentTheme(30001, 'list_title')}>organizations</h4>
        {agent.agentRelationships.map((item, i) => (
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
      {/* <Link href={'projects'}><span {...currentTheme(1001, 'aside_link')}>All projects</span></Link> */}
    </aside>
  )
})

export default Aside

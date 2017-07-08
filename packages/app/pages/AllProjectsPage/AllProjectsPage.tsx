/**
 * AllProjects page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-08-07
 */

import * as React from 'react'
import * as themeable from 'react-themeable'
import BindAgent, { AllOrgsType } from '@vflows/bindings/agent/allOrganizations'
import Link from '@vflows/views/atoms/Link'

interface Props {
  allOrgs?: AllOrgsType,
  loading?: boolean,
  error?: Error,
  theme: Object,
  children: Object
}


const AllProjectsPage = BindAgent(({ allOrgs, loading, error, theme, children }: Props) => {
  let currentTheme = themeable(theme)
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
    <section  {...currentTheme(1, 'allprojects_list')}>
     <div {...currentTheme(2, 'list_menu')}>
       <ul {...currentTheme(3, 'menu_type')}>
         <li {...currentTheme(4, 'type_item', 'active')}>All</li>
         <li {...currentTheme(5, 'type_item')}>Cooperative</li>
         <li {...currentTheme(6, 'type_item')}>Projects</li>
         <li {...currentTheme(7, 'type_item')}>Organizations</li>
         <li {...currentTheme(8, 'type_item')}>Groups</li>
       </ul>
       <div {...currentTheme(9, 'menu_actions')}>
         <button {...currentTheme(10, 'actions_join')}>Create a new Project</button>
       </div>
     </div>
     <div {...currentTheme(11, 'list_projects')}>
       <div {...currentTheme(12, 'row')}>
         {allOrgs.map((org, i)=>(
          <div {...currentTheme((i*7) + 13, 'medium-6',  'end', 'columns')}>
            <div {...currentTheme((i*7) +14, 'projects_item')}>
              <div {...currentTheme((i*7) +15, 'item_row')}>
                <span {...currentTheme((i*7) +16, 'row_image')}><img src={org.image} /></span>
                <Link href={`projects/${org.id}` } {...currentTheme((i*7) +17, 'row_title')}>{org.name}</Link>
                <button {...currentTheme((i*7) +18, 'row_button')}>+ join</button>
              </div>
              <div {...currentTheme((i*7) +19, 'item_description')}>{org.note}</div>
            </div>
          </div>
         ))}
       </div>
     </div>
    </section>
  )))
})

export default AllProjectsPage

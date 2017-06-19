import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import {withRouter, Link} from 'react-router'

interface Props {
  theme: Object
}


const SecondaryMenu: SFC<Props> = ({ router, theme }) => {
  let currentTheme = themeable(theme)
    return (
      <section {...currentTheme(0, 'secondaryMenu')}>
        <ul {...currentTheme(1, 'menu_list')} >
            <li {...currentTheme(2, 'list_item', router.isActive('projects/test', true) && 'active')} >
                <Link activeClassName={'active'} to={'projects/test'} {...currentTheme(3, 'item_link')} >
                    Overview
                </Link>
            </li>
            <li {...currentTheme(4, 'list_item' , router.isActive('projects/test/processes', true) && 'active')} >
                <Link activeClassName={'active'} to={'projects/test/processes'} {...currentTheme(5, 'item_link')} >
                    Processes
                </Link>
            </li>
            <li {...currentTheme(6, 'list_item', router.isActive('projects/test/contributions', true) && 'active')} >
                <Link activeClassName={'active'} to={'projects/test/contributions'} {...currentTheme(7, 'item_link')} >
                    Contributions
                </Link>
            </li>
            <li {...currentTheme(8, 'list_item', router.isActive('projects/test/members', true) && 'active')} >
                <Link activeClassName={'active'} to={'projects/test/members'} {...currentTheme(9, 'item_link')} >
                    Members
                </Link>
            </li>
        </ul>    
        <div {...currentTheme(8, 'menu_actions', router.isActive('projects/test', true) && 'active')} >
            <button {...currentTheme(8, 'actions_process')} >Create new process</button>
        </div>
      </section>
    )
  }

export default withRouter(SecondaryMenu)

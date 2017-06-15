import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import {Link} from 'react-router'

interface Props {
  theme: Object
}


const SecondaryMenu: SFC<Props> = ({ theme }) => {
  let currentTheme = themeable(theme)
    return (
      <section {...currentTheme(0, 'secondaryMenu')}>
        <ul {...currentTheme(1, 'menu_list')} >
            <li {...currentTheme(2, 'list_item', 'active')} >
                <Link to={'projects/test'} {...currentTheme(3, 'item_link')} >
                    Overview
                </Link>
            </li>
            <li {...currentTheme(4, 'list_item')} >
                <Link to={'projects/test/processes'} {...currentTheme(5, 'item_link')} >
                    Processes
                </Link>
            </li>
            <li {...currentTheme(6, 'list_item')} >
                <Link to={'projects/test/contributions'} {...currentTheme(7, 'item_link')} >
                    Contributions
                </Link>
            </li>
            <li {...currentTheme(8, 'list_item')} >
                <Link to={'projects/test/members'} {...currentTheme(9, 'item_link')} >
                    Members
                </Link>
            </li>
        </ul>    
        <div {...currentTheme(8, 'menu_actions')} >
            <button {...currentTheme(8, 'actions_process')} >Create new process</button>
        </div>
      </section>
    )
  }
}

export default SecondaryMenu

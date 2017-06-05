import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object
}


const SecondaryMenu: SFC<Props> = ({ theme }) => {
  let currentTheme = themeable(theme)
    return (
      <section {...currentTheme(0, 'secondaryMenu')}>
        <ul {...currentTheme(1, 'menu_list')} >
            <li {...currentTheme(2, 'list_item', 'active')} >
                <a {...currentTheme(3, 'item_link')} >
                    Overview
                </a>
            </li>
            <li {...currentTheme(4, 'list_item')} >
                <a {...currentTheme(5, 'item_link')} >
                    Processes
                </a>
            </li>
            <li {...currentTheme(6, 'list_item')} >
                <a {...currentTheme(7, 'item_link')} >
                    Contributions
                </a>
            </li>
            <li {...currentTheme(8, 'list_item')} >
                <a {...currentTheme(9, 'item_link')} >
                    Members
                </a>
            </li>
        </ul>    
      </section>
    )
  }
}

export default SecondaryMenu

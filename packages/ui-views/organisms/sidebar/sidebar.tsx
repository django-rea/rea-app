import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object
}

const Sidebar: SFC<Props> = ({ theme }) => {
  let currentTheme = themeable(theme)
  return (
    <aside {...currentTheme(1, 'sidebar')} >
        <div {...currentTheme(2, 'sidebar_menu')} >
          <a {...currentTheme(3, 'menu_link')} >Currency</a>
          <a {...currentTheme(4, 'menu_link', 'active')} >Inventory</a>
        </div>
        <section {...currentTheme(5, 'sidebar_inventory', 'active')} >
          <div {...currentTheme(6, 'sidebar_search')} >
            <input placeholder='Search in inventory' />
            <span {...currentTheme(7, 'icon-magnifying-glass')} />
          </div>
          <ul {...currentTheme(8, 'sidebar_list')} >
            <li {...currentTheme(9, 'list_item')} >
              <span {...currentTheme(10, 'item_type')} >resource type</span>
              <h3 {...currentTheme(11, 'item_title')} >Input impus sid amenus</h3>
              <h4 {...currentTheme(12, 'item_qty')} >72</h4>
            </li>
            <li {...currentTheme(13, 'list_item')} >
              <span {...currentTheme(14, 'item_type')} >resource type</span>
              <h3 {...currentTheme(15, 'item_title')} >Input impus sid amenus</h3>
              <h4 {...currentTheme(16, 'item_qty')} >72</h4>
            </li>
            <li {...currentTheme(17, 'list_item')} >
              <span {...currentTheme(18, 'item_type')} >resource type</span>
              <h3 {...currentTheme(19, 'item_title')} >Input impus sid amenus</h3>
              <h4 {...currentTheme(20, 'item_qty')} >72</h4>
            </li>
          </ul>
        </section>
    </aside>
  )
}

export default Sidebar
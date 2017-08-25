import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import Link from '../../atoms/Link'

interface Props {
  theme: Object
}

const Sidebar: SFC<Props> = ({ inventory, theme }) => {
  let currentTheme = themeable(theme)
  return (
    <aside {...currentTheme(1, 'sidebar')} >
        <div {...currentTheme(2, 'sidebar_menu')} >
          <h4 {...currentTheme(4, 'menu_title')} >Inventory <span>{inventory.length}</span></h4>
        </div>
        <section {...currentTheme(5, 'sidebar_inventory', 'active')} >
          <ul {...currentTheme(8, 'sidebar_list')} >
            {inventory.map((item, i) => (
              <li {...currentTheme(i+i+i+i+9, 'list_item')} >
                <span {...currentTheme(i+i+i+i+10, 'item_type')}>{item.resourceTaxonomyItem.name}</span>
                <h3 {...currentTheme(i+i+i+i+11, 'item_title')}>{item.trackingIdentifier}</h3>
                <h4 {...currentTheme(i+i+i+i+12, 'item_qty')}>{item.currentQuantity.numericValue}</h4>
              </li>
            ))}
          </ul>
        </section>
    </aside>
  )
}

export default Sidebar

import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object
}

const Inventory: SFC<Props> = ({ agent, theme }) => {
  let currentTheme = themeable(theme)
  return (
    <aside {...currentTheme(1, 'sidebar')} >
        <div {...currentTheme(2, 'sidebar_menu')} >
          <h4 {...currentTheme(4, 'menu_title')} >Inventory List <span>{agent.ownedEconomicResources.length}</span></h4>
        </div>
        <section {...currentTheme(5, 'sidebar_inventory', 'active')} >
          <ul {...currentTheme(8, 'sidebar_list')} >
            {agent.ownedEconomicResources.map((item, i) => (
              <li {...currentTheme(i+i+i+i+9, 'list_item')} >
                <span {...currentTheme(i+i+i+i+10, 'item_type')}>{item.resourceClassification.name}</span>
                <h3 {...currentTheme(i+i+i+i+11, 'item_title')}>{item.trackingIdentifier}</h3>
                <h4 {...currentTheme(i+i+i+i+12, 'item_qty')}>{item.currentQuantity.numericValue === -1 ? <span>🚀</span> : item.currentQuantity.numericValue }</h4>
              </li>
            ))}
          </ul>
        </section>
    </aside>
  )
}

export default Inventory

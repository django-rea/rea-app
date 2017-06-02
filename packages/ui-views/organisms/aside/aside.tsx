import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object
}

const Aside: SFC<Props> = ({ theme }) => {
  let currentTheme = themeable(theme)
  console.log(this)
  return (
      <aside {...currentTheme(1, 'aside')} >
        <span {...currentTheme(2, 'aside_logo')} />
        <ul {...currentTheme(3, 'aside_list')} >
            <li {...currentTheme(4, 'list_item')} >
                <a {...currentTheme(5, 'item_link')} >
                    <span {...currentTheme(6, 'link_image')} />
                </a>
            </li>
            <li {...currentTheme(7, 'list_item active')}>
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
            </li>
        </ul>
        <div {...currentTheme(16, 'aside_bottom')} >
            <span {...currentTheme(17, 'icon-plus')} />
        </div>
    </aside>
  )
}

export default Aside

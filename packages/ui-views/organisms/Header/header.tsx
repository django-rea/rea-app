import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import CurrentUser from '@vflows/bindings/user/CurrentUser'

interface UserProps {
  user?: {
    name: string,
    image: string
  },
  loading?: boolean,
  error?: Error,
  theme: Object,
}

interface State {
  action: boolean,
}

const Header = CurrentUser(({ user, loading, error, theme }: UserProps) => {
    let currentTheme = themeable(theme)
    return (
        loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> : (
        <header {...currentTheme(1, 'main_header')} >
            <h2  {...currentTheme(2, 'header_title')}>{user.name}</h2>
            <div {...currentTheme(3, 'header_menu')} >
                <div {...currentTheme(4, 'menu_search')} >
                    <input {...currentTheme(5, 'search', 'input')} placeholder='Search' />
                    <span {...currentTheme(6, 'icon-magnifying-glass')} />
                </div>
                <ul {...currentTheme(7, 'menu_list')} >
                    <li {...currentTheme(8, 'list_item')} ><a {...currentTheme(9, 'item_link')} >menu item 1</a></li>
                    <li {...currentTheme(10, 'list_item')} ><a {...currentTheme(11, 'item_link')} >menu item 2</a></li>
                    <li {...currentTheme(12, 'list_item')} ><a {...currentTheme(13, 'item_link')} >menu item 3</a></li>
                </ul>
                  <div {...currentTheme(14, 'menu_profile')} >
                    <h4>{user.name || 'nobody'}</h4>
                    <div {...currentTheme(15, 'profile_image')}  />
                    <span {...currentTheme(16, 'icon-dots-three-vertical')} />
                </div>
            </div>
        </header>
      )
    ))
})

export default Header

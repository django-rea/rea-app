import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import CurrentUser from '@vflows/bindings/user/CurrentUser'

interface UserProps {
  data?: {
    myAgent: {
      name: string, // :TODO: create custom HoC to help prehandle this output
      image: string
    },
  },
  loading?: boolean,
  error?: Error,
  theme: Object
}

interface State {
  action: boolean,
}

interface Props {
  theme: Object
}

/* eslint no-nested-ternary: 0 */
const UsernameDisplay: SFC<UserProps> = CurrentUser(({ data, loading, error, theme }) => {
  return (
    loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> :
    <div {...theme(14, 'menu_profile')} >
        <h4>{data ? data.myAgent.name : 'nobody'}</h4>
        <div {...theme(15, 'profile_image')}  />
        <span {...theme(16, 'icon-dots-three-vertical')} />
    </div>
  ))
})

const Header: SFC<Props> = ({ theme }) => {
    let currentTheme = themeable(theme)
    return (
        <header {...currentTheme(1, 'main_header')} >
            <h2  {...currentTheme(2, 'header_title')}>FreedomCoop</h2>
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
                <UsernameDisplay theme={currentTheme} />
            </div>
        </header>
    )
}

export default Header

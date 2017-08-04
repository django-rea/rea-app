import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import CurrentUser from '@vflows/bindings/user/CurrentUser'
import Link from '../../atoms/Link'
import {Bell, Search, Horizontal} from '../../icons'

interface UserProps {
  user?: {
    name: string,
    image: string
  },
  loading?: boolean,
  error?: Error,
  theme: Object,
}

const Header = CurrentUser(({ user, loading, error, theme }: UserProps) => {
    let currentTheme = themeable(theme)
    return (
        loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> : (
        <header {...currentTheme(0, 'main_header')} >
          <div {...currentTheme(1, 'row')}>
            <span  {...currentTheme(2, 'header_logo')} />
            <div {...currentTheme(4, 'header_search')} >
              <input {...currentTheme(5, 'search', 'input')} placeholder='Search on kamasi' />
              <span {...currentTheme(6, 'search_icon')}><Search /></span>
            </div>
            <span {...currentTheme(30, 'header_link')}><Link href={'/projects'}>All Projects</Link></span>
            <div {...currentTheme(3, 'header_menu')} >
                  <div {...currentTheme(17, 'menu_bell')}>
                    <Bell />
                  </div>
                  <div {...currentTheme(14, 'menu_profile')} >
                    <div {...currentTheme(15, 'profile_image')}>
                      <img src={user.image} />
                    </div>
                    <h4>{user.name || 'nobody'}</h4>
                    <span {...currentTheme(16, 'profile_other')}><Horizontal /></span>
                </div>
            </div>
            <div {...currentTheme(284484, 'header_mobile')}>
              <ul {...currentTheme(24449, 'mobile_list')}>
                <li {...currentTheme(22383, 'active')}>Projects</li>
                <li>Activities</li>
                <li>Profile</li>
                <li>Notifications</li>
              </ul>
            </div>
          </div>
        </header>
      )
    ))
})

export default Header

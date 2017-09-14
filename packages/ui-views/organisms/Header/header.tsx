import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import CurrentUser from '@vflows/bindings/user/CurrentUser'
import Link from '../../atoms/Link'
import {Bell, Search, Horizontal, Inbox} from '../../icons'
import ProjectsList from '../../molecules/projectsList'
interface UserProps {
  visible: boolean,
  user?: {
    name: string,
    image: string
  },
  loading?: boolean,
  error?: Error,
  theme: Object,
}

class Header extends React.Component {
  constructor () {
    super ()
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.state = {
      dropdown: false
    }
  }

  toggleDropdown () {
    this.setState({
      dropdown: !this.state.dropdown
    })
  }

  render () {
    const {theme, user, loading, error} = this.props
    const {dropdown} = this.state
    let currentTheme = themeable(theme)
    console.log(dropdown)
    return (
      loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> : (
        <header {...currentTheme(0, 'main_header')} >
          <div {...currentTheme(1, 'row')}>
            <div {...currentTheme(4, 'header_projects')}>
<<<<<<< HEAD
              <div {...currentTheme(5, 'projects_button')} onClick={()=>toggleMenu()}>
=======
              <div {...currentTheme(5, 'projects_button')} onClick={()=>this.toggleDropdown()}>
>>>>>>> 4afbe8863daf5fa93c0cf370ad6a2e45e25e8555
                <span {...currentTheme(6, 'button_icon')}><Inbox /></span>
                <o>Projects</o>
              </div>
              <ProjectsList
                agent={user}
<<<<<<< HEAD
                visible={visible}
=======
                visible={dropdown ? '' : 'hidden'}
>>>>>>> 4afbe8863daf5fa93c0cf370ad6a2e45e25e8555
              />
            </div>
            <Link href='/'><span  {...currentTheme(2, 'header_brand')}>Kamasi.</span></Link>
            <div {...currentTheme(3, 'header_menu')} >
                  <div {...currentTheme(17, 'menu_bell')}>
                    <Bell />
                  </div>
                  <div {...currentTheme(14, 'menu_profile')} >
                    <div {...currentTheme(15, 'profile_image')}>
                      <img src={user ? user.image : ''} />
                    </div>
                    <h4>{user ? user.name : 'nobody'}</h4>
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
      )))
  }
}

export default Header

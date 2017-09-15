import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import CurrentUser from '@vflows/bindings/user/CurrentUser'
import Link from '../../atoms/Link'
import {Bell, Search, Horizontal, Folder} from '../../icons'
import ProjectsList from '../../molecules/projectsList'
interface UserProps {
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
    const {theme, user, loading, error, params} = this.props
    const {dropdown} = this.state
    let currentTheme = themeable(theme)
    return (
      loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> : (
        <header {...currentTheme(0, 'main_header')} >
          <div {...currentTheme(1, 'row')}>
            <div {...currentTheme(4, 'header_projects')}>
              <o><Link href='/'>All </Link> / </o>  {user.agentRelationships.find(x => x.object.id === params.id) ? user.agentRelationships.find(x => x.object.id === params.id).object.name : ''}
            </div>
            <div {...currentTheme(3, 'header_menu')} >
              <div {...currentTheme(5, 'projects_button')} onClick={()=>this.toggleDropdown()}>
                <span {...currentTheme(6, 'button_icon')}><Folder /></span>
                <ProjectsList
                  agent={user}
                  visible={dropdown ? '' : 'hidden'}
                />
              </div>
              <div {...currentTheme(17, 'menu_bell')}>
                <Bell />
              </div>
              <div {...currentTheme(14, 'menu_profile')} >
                <div {...currentTheme(15, 'profile_image')}>
                  <img src={user ? user.image : ''} />
                </div>
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

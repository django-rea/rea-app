import * as React from 'react'
import {Component} from 'react'

interface State {
  action: boolean,
}

class Header extends Component<Props, State> {
    state = { action: false }

    constructor () {
        super()
        this.toggleDropdown = this.toggleDropdown.bind(this)
        this.state = {
            action: false
        }
    }
    toggleDropdown (e: Event) {
        this.setState({
            action: !this.state.action
        })
    }
    render () {
        return (
            <header id='main_header'>
                <h2 className='header_title'>FreedomCoop</h2>
                <div className='header_menu'>
                    <div className='menu_search'>
                        <input className='search input' placeholder='Search' />
                        <span className='icon-magnifying-glass' />
                    </div>
                    <ul className='menu_list'>
                        <li className='list_item'><a className='item_link'>menu item 1</a></li>
                        <li className='list_item'><a className='item_link'>menu item 2</a></li>
                        <li className='list_item'><a className='item_link'>menu item 3</a></li>
                    </ul>
                    <div className='menu_profile'>
                        <h4>Pospigos</h4>
                        <div className='profile_image' />
                        <span className='icon-dots-three-vertical' />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header

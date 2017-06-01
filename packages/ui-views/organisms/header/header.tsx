import * as React from 'react'
import * as themeable from 'react-themeable';
import { SFC } from 'react'

interface State {
  action: boolean,
}

interface Props {
  theme: Object
}

const Header: SFC<{Props}> = (theme) => (
    <header {...themeable(theme)(1, 'main_header')} >
        <h2  {...themeable(theme)(2, 'header_title')}>FreedomCoop</h2>
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

export default Header

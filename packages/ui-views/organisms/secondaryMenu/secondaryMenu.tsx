import React, {Component} from 'react'

class SecondaryMenu extends Component {

  render () {
    return (
      <section id='secondaryMenu'>
        <ul className='menu_list'>
            <li className='list_item active'>
                <a className='item_link'>
                    Overview
                </a>
            </li>
            <li className='list_item'>
                <a className='item_link'>
                    Processes
                </a>
            </li>
            <li className='list_item'>
                <a className='item_link'>
                    Contributions
                </a>
            </li>
            <li className='list_item'>
                <a className='item_link'>
                    Members
                </a>
            </li>
        </ul>    
      </section>
    )
  }
}

export default SecondaryMenu

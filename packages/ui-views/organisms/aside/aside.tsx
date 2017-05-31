import * as React from 'react'
import { SFC } from 'react'

const Aside: SFC<{}> = () => (
  <aside id='aside'>
    <span className='aside_logo' />
    <ul className='aside_list'>
        <li className='list_item'>
            <a className='item_link'>
                <span className='link_image' />
            </a>
        </li>
        <li className='list_item active'>
            <a className='item_link'>
                <span className='link_image' />
            </a>
        </li>
        <li className='list_item'>
            <a className='item_link'>
                <span className='link_image' />
            </a>
        </li>
        <li className='list_item'>
            <a className='item_link'>
                <span className='link_image' />
            </a>
        </li>
    </ul>
    <div className='aside_bottom'>
        <span className='icon-plus' />
    </div>
  </aside>
)

export default Aside

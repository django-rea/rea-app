import React, {Component} from 'react'

class Members extends Component {

  render () {
    return (
     <section id='members'>
        <h4 className='members_title'>Members</h4>    
        <ul className='members_list'>
            <li className='list_item'>
                <a className='item_link'>
                    <span className='link_image'></span>
                </a>
            </li>
            <li className='list_item'>
                <a className='item_link'>
                    <span className='link_image'></span>
                </a>
            </li>
            <li className='list_item'>
                <a className='item_link'>
                    <span className='link_image'></span>
                </a>
            </li>
            <li className='list_item'>
                <a className='item_link'>
                    <span className='link_image'></span>
                </a>
            </li>
            <li className='list_item'>
                <a className='item_link'>
                    <span className='link_image'></span>
                </a>
            </li>
            <li className='list_item'>
                <a className='item_link'>
                    <span className='link_image'></span>
                </a>
            </li>
            <li className='list_item'>
                <a className='item_link'>
                    <span className='link_image'></span>
                </a>
            </li>

        </ul>
        <a className='members_link'>See All</a>
     </section>
    )
  }
}

export default Members

import React, {Component} from 'react'

class Sidebar extends Component {

  render () {
    return (
      <aside id='sidebar'>
          <div className='sidebar_menu'>
            <a className='menu_link'>Currency</a>
            <a className='menu_link active'>Inventory</a>
          </div>
          <section className='sidebar_inventory active'>
            <div className='sidebar_search'>
              <input placeholder='Search in inventory' />
              <span className='icon-magnifying-glass' />
            </div>
            <ul className='sidebar_list'>
              <li className='list_item'>
                <span className='item_type'>resource type</span>
                <h3 className='item_title'>Input impus sid amenus</h3>
                <h4 className='item_qty'>72</h4>
              </li>
              <li className='list_item'>
                <span className='item_type'>resource type</span>
                <h3 className='item_title'>Input impus sid amenus</h3>
                <h4 className='item_qty'>∞</h4>
              </li>
              <li className='list_item'>
                <span className='item_type'>resource type</span>
                <h3 className='item_title'>Input impus sid amenus</h3>
                <h4 className='item_qty'>72</h4>
              </li>
            </ul>
          </section>
      </aside>
    )
  }
}

export default Sidebar

import React, {Component} from 'react'

class Overview extends Component {

  render () {
    return (
     <section id='overview'>
         <div className='row'>
             <div className='medium-3 columns'>
                 <div className='overview_item'>
                    <h2 className='item_qty'>56</h2>
                    <h4 className='item_title'>Processes</h4>
                 </div>
             </div>
             <div className='medium-3 columns'>
                 <div className='overview_item'>
                    <h2 className='item_qty'>156</h2>
                    <h4 className='item_title'>Members</h4>
                 </div>
             </div>
             <div className='medium-3 columns'>
                 <div className='overview_item'>
                    <h2 className='item_qty'>202</h2>
                    <h4 className='item_title'>Inventory Items</h4>
                 </div>
             </div>
             <div className='medium-3 columns'>
                 <div className='overview_item'>
                    <h2 className='item_qty'>3</h2>
                    <h4 className='item_title'>Recipes</h4>
                 </div>
             </div>
         </div>
     </section>
    )
  }
}

export default Overview

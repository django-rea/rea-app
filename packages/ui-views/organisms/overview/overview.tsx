import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object
}

const Overview: SFC<Props> = ({ theme }) => {
    let currentTheme = themeable(theme)
    return (
     <section {...currentTheme(0, 'overview')}>
         <div {...currentTheme(1, 'row')}>
             <div {...currentTheme(2, 'medium-3', 'columns')}>
                 <div {...currentTheme(3, 'overview_item')}>
                    <h2 {...currentTheme(4, 'item_qty')}>56</h2>
                    <h4 {...currentTheme(5, 'item_title')}>Processes</h4>
                 </div>
             </div>
             <div {...currentTheme(6, 'medium-3', 'columns')}>
                 <div {...currentTheme(7, 'overview_item')}>
                    <h2 {...currentTheme(8, 'item_qty')}>156</h2>
                    <h4 {...currentTheme(9, 'item_title')}>Members</h4>
                 </div>
             </div>
             <div {...currentTheme(10, 'medium-3', 'columns')}>
                 <div {...currentTheme(11, 'overview_item')}>
                    <h2 {...currentTheme(12, 'item_qty')}>202</h2>
                    <h4 {...currentTheme(13, 'item_title')}>Inventory Items</h4>
                 </div>
             </div>
             <div {...currentTheme(14, 'medium-3', 'columns')}>
                 <div {...currentTheme(15, 'overview_item')}>
                    <h2 {...currentTheme(16, 'item_qty')}>3</h2>
                    <h4 {...currentTheme(17, 'item_title')}>Recipes</h4>
                 </div>
             </div>
         </div>
     </section>
    )
  }
}

export default Overview

import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object,
  events: Array<Object>
}

const List: SFC<Props> = ({ theme, events }) => {
    let currentTheme = themeable(theme)
    return (
      <section {...currentTheme(1, 'list_spaced')}>
        {/*<div {...currentTheme(2, 'list_info')}>
            <h4 {...currentTheme(3, 'info_title')}>Latest contributions</h4>
        </div>*/}
        <div {...currentTheme(0, 'list_box')}>
        {events.map((item, i) => (
          <div {...currentTheme(i+i+i+i+i+i+4, 'list_item')}>
            <div {...currentTheme(i+i+i+i+i+i+5, 'item_info')}>
            <span {...currentTheme(i+i+i+i+i+i+6, 'item_photo')}><img src={item.provider.image} /></span>
            <h2 {...currentTheme(i+i+i+i+i+i+7, 'item_title')}><a>{item.provider.name}</a> {item.action} {item.affectedQuantity.numericValue} {item.affectedQuantity.unit ? item.affectedQuantity.unit.name : ''} from/to <a>{item.receiver.name}</a></h2>
            </div>
            <div {...currentTheme(i+i+i+i+i+i+8, 'item_description')}>{item.note}</div>
            <div {...currentTheme(i+i+i+i+i+i+9, 'item_actions')}>
                <span {...currentTheme(i+i+i+i+i+i+10, 'actions_date')}>{item.start}</span>
            </div>
          </div>
        ))}
        </div>
      </section>
    )
}

export default List

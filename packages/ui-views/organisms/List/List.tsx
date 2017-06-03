import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object
}

const List: SFC<Props> = ({ theme }) => {
    let currentTheme = themeable(theme)
    return (
      <section {...currentTheme(1, 'list')}>
        <div {...currentTheme(2, 'list_info')}>
            <h4 {...currentTheme(3, 'info_title')}>Latest contributions</h4>
        </div>
        <div {...currentTheme(4, 'list_item')}>
            <div {...currentTheme(5, 'item_info')}>
                <h3 {...currentTheme(6, 'info_name')}>LynnFhoster</h3>
                <h2 {...currentTheme(7, 'info_title')}>Process title blabla</h2>
                <div {...currentTheme(8, 'info_description')}>lorem ipsum bablabla lorem ipsum bablabla lorem ipsum bablabla</div>
                <div {...currentTheme(9, 'info_actions')}>
                    <span {...currentTheme(10, 'actions_tasks')}>6 tasks</span>
                    <span {...currentTheme(11, 'actions_date')}>5 Jun 2017</span>
                </div>
                <div {...currentTheme(12, 'item_actions')}>
                    <button {...currentTheme(13, 'actions_open')}>open</button>
                    <span />
                </div>
            </div>
            <div {...currentTheme(14, 'item_info')}>
                <h3 {...currentTheme(15, 'info_name')}>LynnFhoster</h3>
                <h2 {...currentTheme(16, 'info_title')}>Process title blabla</h2>
                <div {...currentTheme(17, 'info_description')}>lorem ipsum bablabla lorem ipsum bablabla lorem ipsum bablabla</div>
                <div {...currentTheme(18, 'info_actions')}>
                    <span {...currentTheme(19, 'actions_tasks')}>6 tasks</span>
                    <span {...currentTheme(20, 'actions_date')}>5 Jun 2017</span>
                </div>
                <div {...currentTheme(21, 'item_actions')}>
                    <button {...currentTheme(22, 'actions_open')}>open</button>
                    <span />
                </div>
            </div>
        </div>
      </section>
    )
}

export default List

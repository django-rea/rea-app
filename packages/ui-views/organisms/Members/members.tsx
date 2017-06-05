import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object
}

const Members: SFC<Props>  = ({ theme }) => {
    let currentTheme = themeable(theme)
    return (
        <section {...currentTheme(0, 'members')}>
        <h4 {...currentTheme(1, 'members_title')}>Members</h4>    
        <ul {...currentTheme(2, 'members_list')}>
            <li {...currentTheme(3, 'list_item')}>
                <a {...currentTheme(4, 'item_link')}>
                    <span {...currentTheme(5, 'link_image')}></span>
                </a>
            </li>
            <li {...currentTheme(6, 'list_item')}>
                <a {...currentTheme(7, 'item_link')}>
                        <span {...currentTheme(8, 'link_image')}></span>
                </a>
            </li>
            <li {...currentTheme(9, 'list_item')}>
                <a {...currentTheme(10, 'item_link')}>
                    <span {...currentTheme(11, 'link_image')}></span>
                </a>
            </li>
            <li {...currentTheme(12, 'list_item')}>
                <a {...currentTheme(13, 'item_link')}>
                    <span {...currentTheme(14, 'link_image')}></span>
                </a>
            </li>
            <li {...currentTheme(15, 'list_item')}>
                <a {...currentTheme(16, 'item_link')}>
                    <span {...currentTheme(17, 'link_image')}></span>
                </a>
            </li>
            <li {...currentTheme(18, 'list_item')}>
                <a {...currentTheme(19, 'item_link')}>
                    <span {...currentTheme(20, 'link_image')}></span>
                </a>
            </li>
            <li {...currentTheme(21, 'list_item')}>
                <a {...currentTheme(22, 'item_link')}>
                    <span {...currentTheme(23, 'link_image')}></span>
                </a>
            </li>

        </ul>
        <a {...currentTheme(24, 'members_link')}>See All</a>
        </section>
    )
}

export default Members

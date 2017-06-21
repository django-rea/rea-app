import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface MembersProps {
  theme: Object
}


const Members = ({members, theme }) => {
  let currentTheme = themeable(theme)
  return (
    <section {...currentTheme(0, 'members')}>
      <h4 {...currentTheme(1, 'members_title')}>Members</h4>    
      <ul {...currentTheme(2, 'members_list')}>
          {members.map((item, i) => (
          <li {...currentTheme(i+i+i+3, 'list_item')}>
              <a {...currentTheme(i+i+i+4, 'item_link')}>
                  <span {...currentTheme(i+i+i+5, 'link_image')}>
                      <img src={item.image} />
                  </span>
              </a>
          </li>
          ))}
      </ul>
      <a {...currentTheme(24, 'members_link')}>See All</a>
    </section>
  )
}

export default Members

import * as React from 'react'
import * as themeable from 'react-themeable'

import BindMembers from '@vflows/bindings/agent/AgentMembers'
import { AgentType } from '@vflows/bindings/agent/agent'

interface MembersProps {
  members: Array<AgentType>, // :TODO: create custom HoC to help prehandle this output
  theme: Object
}

const MembersBig = ({ members, theme }: MembersProps) => {
    let currentTheme = themeable(theme)
    return (
      <section {...currentTheme(1, 'membersBig')}>
        <div {...currentTheme(3, 'membersBig_list')}>
          <div {...currentTheme(4, 'row')}>
            {members.map((item, i) => (
            <div {...currentTheme(i + i + i + i + 5, 'medium-3', 'small-4' 'columns', 'end')}>
              <div {...currentTheme(i + i + i + i + 6, 'list_member')}>
                <span {...currentTheme(i + i + i + i + 7, 'member_photo')}>
                  <img src={item.subject.image} />
                </span>
                <h3 {...currentTheme(i + i + i + i + 8, 'member_name')}>{item.subject.name}</h3>
                <h5>{item.relationship.category}</h5>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

export default MembersBig

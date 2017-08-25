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
    let types = members.map(m => m.relationship.category)
    let unique_types = Array.from(new Set(types))
    return (
      <section {...currentTheme(1, 'membersBig')}>
        {unique_types.map((type, i) => (
          <div {...currentTheme((3 +  i + i +i) + 393, 'membersBig_list')}>
            <h5 {...currentTheme((2 + i + i + i) + 393, 'list_type')} >{type}</h5>
            <div {...currentTheme((4 + i + i + i) + 393, 'row')}>
              {members.filter(item => item.relationship.category === type).map((item, y) => (
              <div {...currentTheme((y + y + y + y + 5) * 10223, 'medium-3', 'small-4' 'columns', 'end')}>
                <div {...currentTheme((y + y + y + y + 6) * 10223, 'list_member')}>
                  <span {...currentTheme((y + y + y + y + 7) * 10223, 'member_photo')}>
                    <img src={item.subject.image} />
                  </span>
                  <h3 {...currentTheme((y + y + y + y + 8) * 10223, 'member_name')}>{item.subject.name}</h3>
                  <h5>{item.relationship.category}</h5>
                </div>
              </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    )
  }

export default MembersBig

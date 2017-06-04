import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object
}

const MembersBig: SFC<Props> = ({ theme }) => {
    let currentTheme = themeable(theme)
    return (
      <section {...currentTheme(1, 'membersBig')}>
        <h4 {...currentTheme(2, 'membersBig_title')}>45 Members</h4>
        <div {...currentTheme(3, 'membersBig_list')}>
          <div {...currentTheme(4, 'row')}>
            <div {...currentTheme(5, 'medium-2', 'columns', 'end')}>
              <div {...currentTheme(6, 'list_member')}>
                <span {...currentTheme(7, 'member_photo')} />
                <h3 {...currentTheme(8, 'member_name')}>FosterLynn</h3>
              </div>  
            </div>
            <div {...currentTheme(9, 'medium-2', 'columns', 'end')}>
              <div {...currentTheme(10, 'list_member')}>
                <span {...currentTheme(11, 'member_photo')} />
                <h3 {...currentTheme(12, 'member_name')}>FosterLynn</h3>
              </div>  
            </div>
            <div {...currentTheme(13, 'medium-2', 'columns', 'end')}>
              <div {...currentTheme(14, 'list_member')}>
                <span {...currentTheme(15, 'member_photo')} />
                <h3 {...currentTheme(16, 'member_name')}>FosterLynn</h3>
              </div>  
            </div>
            <div {...currentTheme(17, 'medium-2', 'columns', 'end')}>
              <div {...currentTheme(18, 'list_member')}>
                <span {...currentTheme(19, 'member_photo')} />
                <h3 {...currentTheme(20, 'member_name')}>FosterLynn</h3>
              </div>  
            </div>
            <div {...currentTheme(21, 'medium-2', 'columns', 'end')}>
              <div {...currentTheme(22, 'list_member')}>
                <span {...currentTheme(23, 'member_photo')} />
                <h3 {...currentTheme(24, 'member_name')}>FosterLynn</h3>
              </div>  
            </div>
            <div {...currentTheme(22, 'medium-2', 'columns', 'end')}>
              <div {...currentTheme(23, 'list_member')}>
                <span {...currentTheme(24, 'member_photo')} />
                <h3 {...currentTheme(25, 'member_name')}>FosterLynn</h3>
              </div>  
            </div>
            <div {...currentTheme(26, 'medium-2', 'columns', 'end')}>
              <div {...currentTheme(27, 'list_member')}>
                <span {...currentTheme(28, 'member_photo')} />
                <h3 {...currentTheme(29, 'member_name')}>FosterLynn</h3>
              </div>  
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MembersBig

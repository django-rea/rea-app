import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import { authedGraphQL } from '../../../services/api'

interface MembersProps {
  data?: {
    agent: {
      members: any // :TODO: create custom HoC to help prehandle this output
    },
  },
  loading?: boolean,
  error?: Error,
  theme: Object
}


const MembersQuery = authedGraphQL(`
  agent(id: 135) {
    members {
      name
      id
      image
    }
  }
`)

const Members: SFC<MembersProps>  = MembersQuery(({data, loading, error, theme }) => {
    let currentTheme = themeable(theme)
    console.log(data)
    console.log(error)
    return (
        loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> :
        <section {...currentTheme(0, 'members')}>
        <h4 {...currentTheme(1, 'members_title')}>Members</h4>    
        <ul {...currentTheme(2, 'members_list')}>
            {data.agent.members.map((item, i) => (
            <li {...currentTheme(i+i+i+3, 'list_item')}>
                <a {...currentTheme(i+i+i+4, 'item_link')}>
                    <span {...currentTheme(i+i+i+5, 'link_image')}>
                        <img src={item.image} />
                    </span>
                </a>
            </li>
            )}
        </ul>
        <a {...currentTheme(24, 'members_link')}>See All</a>
        </section>
    )
})

export default Members

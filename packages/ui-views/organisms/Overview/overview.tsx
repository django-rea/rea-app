import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import ProjectDescription from '../ProjectDescription'
import { authedGraphQL } from '../../../services/api'

// import CurrentProject from '@vflows/bindings/project/currentProject'

interface OrgsProps {
  data?: {
    agent: {
      organizations: any // :TODO: create custom HoC to help prehandle this output
    },
  },
  loading?: boolean,
  error?: Error,
  theme: Object
}


const DescriptionQuery = authedGraphQL(`
  agent(id: 135) {
    note
    unfinishedProcesses {
        name
    }
    members {
        name
    }
    ownedEconomicResources {
        resourceType
    }
  }
`)



const Overview: SFC<OrgsProps> = DescriptionQuery(({ id, data, loading, error, theme }) => {
    console.log(id)
    let currentTheme = themeable(theme)
    return (
    loading ? <strong>Loading...</strong> : (error ? <p style={{ color: '#F00' }}>API error</p> :
     <section {...currentTheme(0, 'overview')}>
        <h4 {...currentTheme(18, 'overview_title')} >Overview</h4>
         <ProjectDescription note={data.agent.note} />
         <div {...currentTheme(1, 'row')}>
             <div {...currentTheme(2, 'medium-3', 'columns')}>
                 <div {...currentTheme(3, 'overview_item')}>
                    <h2 {...currentTheme(4, 'item_qty')}>{data.agent.unfinishedProcesses.length}</h2>
                    <h4 {...currentTheme(5, 'item_title')}>Processes</h4>
                 </div>
             </div>
             <div {...currentTheme(6, 'medium-3', 'columns')}>
                 <div {...currentTheme(7, 'overview_item')}>
                    <h2 {...currentTheme(8, 'item_qty')}>{data.agent.members.length}</h2>
                    <h4 {...currentTheme(9, 'item_title')}>Members</h4>
                 </div>
             </div>
             <div {...currentTheme(10, 'medium-3', 'columns')}>
                 <div {...currentTheme(11, 'overview_item')}>
                    <h2 {...currentTheme(12, 'item_qty')}>{data.agent.ownedEconomicResources.length}</h2>
                    <h4 {...currentTheme(13, 'item_title')}>Inventory Items</h4>
                 </div>
             </div>
             <div {...currentTheme(14, 'medium-3', 'columns')}>
                 <div {...currentTheme(15, 'overview_item')}>
                    <h2 {...currentTheme(16, 'item_qty')}>0</h2>
                    <h4 {...currentTheme(17, 'item_title')}>Recipes</h4>
                 </div>
             </div>
         </div>
     </section>
    )
  }
})

export default Overview

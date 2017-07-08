import * as React from 'react'
import Sidebar from '../../organisms/Sidebar'
import SecondaryMenu from '../../organisms/SecondaryMenu'
import * as themeable from 'react-themeable'
import BindAgent, { AgentType } from '@vflows/bindings/agent/agent'


interface Props {
  agent?: AgentType,
  loading?: boolean,
  error?: Error,
  theme: Object,
  children: Object
}

interface RouterProps {
  router: {
    params: {
      id: string,
    },
  },
}

const SingleProjectTemplate = BindAgent(({ agent, loading, error, theme, children }: Props) => {
  let currentTheme = themeable(theme)
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
  <div {...currentTheme(0, 'row')}>
    <div {...currentTheme(1, 'medium-12', 'columns')}>
      <div {...currentTheme(2, 'context_overview')}>
        <div {...currentTheme(3, 'overview_info')}>
          <span {...currentTheme(4, 'overview_photo')}><img src={agent.image}/></span>
          <h2 {...currentTheme(5, 'overview_name')}>{agent.name}</h2>
        </div>
      </div>
    </div>
    <section {...currentTheme(6, 'medium-8', 'columns')}>
      <SecondaryMenu
      id={agent.id}
      totalProcesses={agent.agentProcesses.length}
      totalNetwork={agent.agentRelationships.length} />
      <div>
        {children && React.cloneElement(children, {
          id: agent.id,
          agent
        })}
      </div>
    </section>
    <div {...currentTheme(7, 'medium-4', 'columns')}>
      <Sidebar inventory={agent.ownedEconomicResources.filter(resource => resource.category === 'INVENTORY')} />
    </div>
  </div>
  )))})

export default ({ router, theme, children }: RouterProps) => (
  <SingleProjectTemplate children={children} theme={theme} agentId={router.params.id} />
)

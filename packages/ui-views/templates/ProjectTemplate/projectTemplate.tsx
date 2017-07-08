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

const ProjectTemplate = BindAgent(({ agent, loading, error, theme, children }: Props) => {
  let currentTheme = themeable(theme)
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
  <div {...currentTheme(0, 'row')}>
        {children && React.cloneElement(children, {
          id: agent.id,
          agent
        })}
  </div>
  )))})

export default ({ router, theme, children }: RouterProps) => (
  <ProjectTemplate children={children} theme={theme} agentId={router.params.id} />
)

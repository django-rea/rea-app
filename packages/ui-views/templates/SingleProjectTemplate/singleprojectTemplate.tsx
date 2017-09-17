import * as React from 'react'
import Sidebar from '../../organisms/Sidebar'
import SecondaryMenu from '../../organisms/SecondaryMenu'
import ProcessModal from '../../organisms/ProcessModal'
import Hero from '../../organisms/hero'
import * as themeable from 'react-themeable'
import BindAgent, { AgentType } from '@vflows/bindings/agent/agent'
import {Vertical} from '../../icons'
import Modal from 'react-modal'
import Aside from '../../organisms/Aside'

interface Props {
  agent?: AgentType,
  loading?: boolean,
  error?: Error,
  theme: Object,
  children: Object
}

interface RouterProps {
  theme: Object,
  children: any,
  router: {
    params: {
      id: string,
    },
  },
}

const SingleProjectTemplate = ({theme, agentId, children}) => {
  let currentTheme = themeable(theme)
  return (
    // loading ? <strong>Loading...</strong> : (
    // error ? <p style={{ color: '#F00' }}>API error</p> : (
      <div {...currentTheme(11, 'row', 'collapse')}>
            <section {...currentTheme(6, 'medium-12', 'columns')}>
              <SecondaryMenu
                id={agentId}
                totalProcesses={0}
                totalNetwork={0}
                totalInventory={0} />
              <div>
                {children && React.cloneElement(children, {
                  agentId: agentId
                })}
              </div>
            </section>
      </div>
  // ))
)
}

export default ({ router, theme, children}: RouterProps) => (
  <SingleProjectTemplate children={children} theme={theme} agentId={router.params.id} />
)

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

const SingleProjectTemplate = BindAgent(({ agent, loading, error, theme, children, showModal, handleOpenModal, handleCloseModal, modalId }: Props) => {
  let currentTheme = themeable(theme)
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
      <div {...currentTheme(11, 'row', 'collapse')}>
            <section {...currentTheme(6, 'medium-12', 'columns')}>
              <SecondaryMenu
                id={agent.id}
                totalProcesses={agent.agentProcesses.length}
                totalNetwork={agent.agentRelationships.length}
                totalInventory={agent.ownedEconomicResources.length} />
              <div>
                {children && React.cloneElement(children, {
                  id: agent.id,
                  agent,
                  handleOpenModal
                })}
              </div>
            </section>
      </div>
  )))})

export default ({ router, theme, children, showModal, handleOpenModal, handleCloseModal, modalId }: RouterProps) => (
  <SingleProjectTemplate children={children} theme={theme} agentId={router.params.id} showModal={showModal} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} modalId={modalId} />
)

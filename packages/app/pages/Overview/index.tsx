/**
 * Overview page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-04-06
 */

import * as React from 'react'
import { Component, ReactElement } from 'react'
import List from '@vflows/views/organisms/List'
import { AgentType } from '@vflows/bindings/agent/agent'

interface Props {
  agent?: AgentType
}

interface RouterProps {
  router: {
    params: {
      id: string,
    },
  },
  agent?: AgentType
}

const OverviewPage = ({ agent }: Props) => {
  return (
    <div>
      <List events={agent.agentEconomicEvents}/>
    </div>
    )
}

export default ({ router, agent }: RouterProps) => (
  <OverviewPage agent={agent} agentId={router.params.id} />
)

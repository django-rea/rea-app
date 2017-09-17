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
import BindEvents from '@vflows/bindings/events/events'

interface Props {
  agent?: Object,
  loading: Boolean,
  error: Object,
  agentId: Number
}

interface RouterProps {
  router: {
    params: {
      id: string,
    },
  }
}

const OverviewPage = BindEvents(({ agent, agentId, loading, error }: Props) => {
  console.log(agentId)
  return (
    loading ? <strong>Loading...</strong> : (
      error ? <p style={{ color: '#F00' }}>API error</p> : (
    <div>
      <List events={agent.agentEconomicEvents}/>
    </div>
    )))
})

export default ({ router }: RouterProps) => (
  <OverviewPage agentId={router.params.id} />
)

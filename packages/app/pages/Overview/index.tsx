/**
 * Overview page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-04-06
 */

import * as React from 'react'
import { Component, ReactElement } from 'react'

import ProjectTemplate from '@vflows/views/templates/ProjectTemplate'

import Sidebar from '@vflows/views/organisms/Sidebar'
import Overview from '@vflows/views/organisms/Overview'
import Members from '@vflows/views/organisms/Members'
import List from '@vflows/views/organisms/List'
import BindAgent, { AgentType } from '@vflows/bindings/agent/agent'

interface Props {
  agent?: AgentType,
  loading?: boolean,
  error?: Error,
}

const OverviewPage = BindAgent(({ agent, loading, error }: Props) => {
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
    <div>
      <Overview
        note={agent.note}
        processes={agent.agentProcesses}
        inventory={agent.ownedEconomicResources}
        members={agent.members}
      />
      <Members members={agent.members}/>
      <List />
    </div>)
    )
  )
})

export default OverviewPage

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
import Agent from '@vflows/bindings/agent/agent'

const OverviewPage = Agent(({data, loading, error}) => {
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> :
    <div>
      <Overview
        note={data.agent.note}
        processes={data.agent.unfinishedProcesses}
        inventory={data.agent.ownedEconomicResources}
        members={data.agent.members}
      />
      <Members members={data.agent.members}/>
      <List />
    </div>)
    )
})

export default OverviewPage

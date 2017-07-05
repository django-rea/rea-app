/**
 * Accounts page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-04-06
 */

import * as React from 'react'
import { Component, ReactElement } from 'react'
import { AgentType } from '@vflows/bindings/agent/agent'
import * as themeable from 'react-themeable'

interface Props {
  agent?: AgentType,
  theme: Object
}

interface RouterProps {
  router: {
    params: {
      id: string,
    },
  },
  agent?: AgentType,
  theme: Object
}

const AccountsPage = ({theme, agent}) => {
  let currentTheme = themeable(theme)
  // let faircoin = agent.ownedEconomicResources.filter(resource => resource.unit === 'FairCoin')[0]
  return (
    <section {...currentTheme(1, 'accounts')}>
      <h4 {...currentTheme(2, 'accounts_title')}>Faircoin</h4>
      <div {...currentTheme(3, 'accounts_info')}>
        <h2 {...currentTheme(4, 'info_amount')}>304</h2>
        <h5 {...currentTheme(5, 'info_balance')}>Balance</h5>
      </div>
    </section>
  )
}

export default ({ router, agent, theme }: RouterProps) => (
  <AccountsPage theme={theme} agent={agent} agentId={router.params.id} />
)

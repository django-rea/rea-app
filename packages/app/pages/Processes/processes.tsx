/**
 * Processes page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-05-06
 */

import * as React from 'react'
import { AgentType } from '@vflows/bindings/agent/agent'
import * as themeable from 'react-themeable'
import {Horizontal, Down} from '@vflows/views/icons'
import BindPlan from '@vflows/bindings/plans/plans'
import {withRouter, Link} from 'react-router'

interface Props {
  agent?: AgentType,
  theme: Object,
  loading:boolean,
  agentId: Number,
  error: Object,
  router: {
    params: {
      id: string,
    },
  },
}
const ProcessesPage = BindPlan(({ agent, loading, agentId, error, router, theme }: Props) => {
  let currentTheme = themeable(theme)
  console.log(agentId)
  console.log(agent)
  console.log(error)
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
    <section  {...currentTheme(1, 'processes_list')}>
      <div {...currentTheme(9, 'list')}>
      <h5 {...currentTheme(10, 'list_title')}>☕ All Plans</h5>
          {agent.agentPlans.map((plan, i) => (
            <Link
              key={i}
              to={'/plans/' + plan.id }
              className='link'
            >
            <div key={i} {...currentTheme(11 + i, 'list_item')}>
              <h4>{plan.name.length === 0 ? 'unassigned name' : plan.name }</h4>
              <p>{plan.note || 'unassigned note'}</p>
            </div>
            </Link>
          ))}
      </div>
    </section>
  )))
})

export default ProcessesPage

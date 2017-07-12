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

interface Props {
  agent?: AgentType,
  theme: Object,
  router: {
    params: {
      id: string,
    },
  },
}

const ProcessesPage = ({ agent, router, theme }: Props) => {
  let currentTheme = themeable(theme)
  return (
    <section  {...currentTheme(1, 'processes_list')}>
      {agent.agentProcesses.map((process, i) => (
        <div {...currentTheme((i * 12) + 2, 'processes_item')}>
          <div {...currentTheme((i * 12) + 3, 'item_first')}>
            <h3 {...currentTheme((i * 12) + 4, 'first_title')}>{process.name}</h3>
            <div {...currentTheme((i * 12) + 5, 'first_actions' )}>
              <span {...currentTheme((i * 12) + 6, 'action_more' )}><Horizontal /></span>
              <span {...currentTheme((i * 12) + 7, 'action_open' )}><Down /></span>
            </div>
          </div>
          <div {...currentTheme((i * 12) + 8, 'item_second')}>{process.note}</div>
          <div {...currentTheme((i * 12) + 9, 'item_third')}>
            <span {...currentTheme((i * 12) + 10, 'third_date')}>{process.plannedStart} | {process.plannedDuration}</span>
            <div {...currentTheme((i * 12) + 11, 'third_members')}>
              <span {...currentTheme((i * 12) + 12, 'members_single')} />
              <span {...currentTheme((i * 12) + 13, 'members_single')} />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProcessesPage

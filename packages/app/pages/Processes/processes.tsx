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

const ProcessesPage = ({ agent, router, theme, handleOpenModal }: Props) => {
  let currentTheme = themeable(theme)
  return (
    <section  {...currentTheme(1, 'processes_list')}>
      {agent.agentProcesses.map((process, i) => (
        <div {...currentTheme((i * 12) + 2, 'processes_item')} onClick={()=>handleOpenModal(process.id)}>
          {process.isStarted ? <o {...currentTheme((i*12)+1000, 'item_green'} ></o> : '' }
          <div {...currentTheme((i * 12) + 3, 'item_first')}>
            <h3 {...currentTheme((i * 12) + 4, 'first_title')}>{process.name}</h3>
            {/*<div {...currentTheme((i * 12) + 5, 'first_actions' )}>
              <span {...currentTheme((i * 12) + 6, 'action_back' )}>1 Prev</span>
              <span {...currentTheme((i * 12) + 7, 'action_next' )}>0 Next</span>
            </div>*/}
          </div>
          <div {...currentTheme((i * 12) + 8, 'item_second')}>{process.note}</div>
          <div {...currentTheme((i * 12) + 9, 'item_third')}>
            <span {...currentTheme((i * 12) + 10, 'third_date')}>{process.plannedStart} | {process.plannedDuration}</span>
            <div {...currentTheme((i * 12) + 11, 'third_members')}>
              {process.workingAgents.map((ag,index)=> (
                <span {...currentTheme((i * 12) + index + 12, 'members_single')}>
                  <img src={ag.image} />
                </span>
              ))}
            </div>
          </div>

        </div>
      ))}
    </section>
  )
}

export default ProcessesPage

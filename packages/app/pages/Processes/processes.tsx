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
      <div {...currentTheme(2, 'list_actions')}>
        <div {...currentTheme(3, 'process_form')}>
          <input placeholder='Type the name of the process...'/>
          <div {...currentTheme(4, 'form_actions')}>
            <b>type</b>
            <button {...currentTheme(5, 'actions_left')} >work</button>
            {/* <button {...currentTheme(6, 'actions_left')}>Add Committment</button>
            <button {...currentTheme(7, 'actions_left')}>Add Output</button> */ }
            <button {...currentTheme(8, 'actions_create')}>Publish</button>
          </div>
        </div>
      </div>
      <div {...currentTheme(9, 'list')}>
      <h5 {...currentTheme(10, 'list_title')}>Processes list</h5>
      {agent.agentProcesses.map((process, i) => (
        <div {...currentTheme((i * 12) + 2, 'processes_item')} onClick={()=>handleOpenModal(process.id)}>
          {/* {process.isStarted ? <o {...currentTheme((i*12)+1000, 'item_green'} ></o> : '' } */}
          <div {...currentTheme((i * 12) + 3, 'item_first')}>
            <h3 {...currentTheme((i * 12) + 4, 'first_title')}>{process.name}</h3>
            <div {...currentTheme((i*12) + 5, 'secondary_information')}>
              {process.isFinished ?
              <span {...currentTheme((i*12) + 6, 'finished', 'info_isFinished')}>Finished</span>
              :
              <span {...currentTheme((i*12) + 7, 'unfinished', 'info_isFinished')}>Unfinished</span>
              }
              <span {...currentTheme((i*12) + 8, 'info_isType') }>Process</span>
              <div {...currentTheme((i * 12) + 11, 'info_members')}>
                {process.workingAgents.map((ag,index)=> (
                  <span {...currentTheme((i * 12) + index + 12, 'members_single')}>
                    <img src={ag.image} />
                  </span>
                ))}
              </div>


            </div>
          </div>
          <div {...currentTheme((i * 12) + 8, 'item_second')}>{process.note}</div>
          <div {...currentTheme((i * 12) + 9, 'item_third')}>
            <span {...currentTheme((i * 12) + 10, 'third_date')}>Due to {process.plannedStart} | Duration {process.plannedDuration}</span>
          </div>
          <div {...currentTheme(1000, 'item_actions')}>
            <nav>
              <span>{process.processEconomicEvents.length + process.unplannedEconomicEvents.length } Events</span>
              <span>{process.processCommitments.length} Planned</span>
              <span>{process.inputs.length} Input</span>
              <span>{process.outputs.length} Output</span>
            </nav>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default ProcessesPage

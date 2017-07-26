import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import BindProcess, { AgentType } from '@vflows/bindings/process/process'
import {Check, Inbox, Users} from '../../icons'

interface Props {
  theme: Object,
  data: Object,
  note: String
}

const ProcessModal: SFC<Props> = BindProcess(({process, loading, error, theme, modalId, handleCloseModal}) => {
  let currentTheme = themeable(theme)
  console.log(process)
  console.log(error)
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
    <section {...currentTheme(0, 'processModal', 'row')}>
      <div {...currentTheme(2, 'medium-12', 'columns')}>
        <h2 {...currentTheme(1, 'processModal_title')}>{process.name}</h2>
      </div>
        <div {...currentTheme(3, 'medium-8', 'columns')}>
          {process.note.length > 0 ? <div {...currentTheme(4, 'processModal_description')}>{process.note}</div> : ''}

          <div {...currentTheme(20, 'processModal_section')}>
            <h4>Output</h4>
            <div {...currentTheme(21, 'sections_output')}>
              {process.committedOutputs.map((output, i) => (
                <div {...currentTheme((i*3) + 220, 'input_task')}>
                  <div>
                    {/*{output.isFinished === true ? <Check /> : <span {...currentTheme((i*3) + 2300, 'task_done')} /> }*/}
                    <h3 {...currentTheme((i*3) + 24000, 'task_title')}>{output.action + ' ' + output.committedQuantity.numericValue + ' ' + output.committedQuantity.unit.name + ' ' + output.committedTaxonomyItem.name }</h3>
                    <div {...currentTheme((i*4) +2913), 'task_description'}>{output.note}</div>
                  </div>
                  <span {...currentTheme((i*3) + 2500, 'task_date')}>{output.committedOn}</span>
                </div>

              ))}
            </div>
          </div>
          {process.processCommitments.length > 0 ?
          <div {...currentTheme(14, 'processModal_section')}>
            <h4>Works</h4>
            <div {...currentTheme(15, 'sections_tasks')}>
              {process.processCommitments.map((input, i) => (
                <div {...currentTheme((i*2) + 16000, 'tasks_item', input.isFinished)}>
                  <h3 {...currentTheme((i*2) + 17000, 'item_title' , input.isFinished)}>{input.provider ? <span><img src={input.provider.image} alt={input.provider.name}/></span> : ''} {input.committedTaxonomyItem.name + ': ' + input.committedQuantity.numericValue + ' ' +  input.committedQuantity.unit.name} <o>{  ' - ' + input.due}</o></h3>
                  <p>{input.note || ''}</p>
                  <div {...currentTheme((i*4) + 1993334, 'item_activities')}>
                    <h6>{input.fulfilledBy.length + ' '} Activities</h6>
                    {input.fulfilledBy.map((ev, i) => (
                      <div key={i}><b>{ev.provider.name}</b>{ ' ' + ev.action + ' ' + ev.affectedQuantity.numericValue + ' ' + ev.affectedQuantity.unit.name} <span>{ ' - ' + ev.start}</span></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div> :
          ''}
        </div>
        <div {...currentTheme(33, 'medium-4', 'columns')}>
          {process.workingAgents.length > 0 ?
            <div {...currentTheme(5, 'processModal_section')}>
              <h4>Members</h4>
              <div {...currentTheme(6, 'sections_photo')}>
                {process.workingAgents.map(agent => <span {...currentTheme(7 + agent.id, 'photo_item')}><img alt={agent.name} src={agent.image} /></span> )}
              </div>
            </div> :
            ''
          }
          <div {...currentTheme(35, 'processModal_section')}>
            <h4>Actions</h4>
            <div {...currentTheme(36, 'sections_actions')}>
              <button {...currentTheme(37, 'actions_complete')}> Finish Process</button>
              <button>Deadline</button>
              <button>Members</button>
              <div {...currentTheme(38, 'actions_processes')}>
                <h4>Previous Processes</h4>
                {process.previousProcesses.length > 0 ? process.previousProcesses.map((prev, i) => (<div {...currentTheme((i * 101001) + 39, 'processess_item')}>{prev.name}</div>)) :
                  <div {...currentTheme(39, 'processess_item')}>No previous processes</div>
                }
                <h4>Next Processes</h4>
                {process.nextProcesses.length > 0 ? process.nextProcesses.map((next, i) => (<div {...currentTheme((i * 101001) + 40, 'processess_item')}>{next.name}</div>)) :
                  <div {...currentTheme(40, 'processess_item')}>No next processes</div>
                }
              </div>
            </div>
          </div>
        </div>
    </section>
  )))
})

export default ({theme, handleCloseModal, modalId }) => (
  <ProcessModal theme={theme}  handleCloseModal={handleCloseModal} processId={modalId} />
)

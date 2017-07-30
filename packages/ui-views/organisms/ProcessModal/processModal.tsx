import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import BindProcess, { AgentType } from '@vflows/bindings/process/process'
import {Activity, Edit, Heart, Inbox, Users} from '../../icons'
import TasksList from './tasksList'
interface Props {
  theme: Object,
  data: Object,
  note: String
}

const ProcessModal: SFC<Props> = BindProcess(({process, loading, error, theme, modalId, handleCloseModal}) => {
  let currentTheme = themeable(theme)
  console.log(process)
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
    <section {...currentTheme(0, 'processModal', 'row')}>
      <div {...currentTheme(2, 'medium-12', 'columns')}>
        <h2 {...currentTheme(1, 'processModal_title')}>{process ? process.name : ''}</h2>
      </div>
        <div {...currentTheme(3, 'medium-8', 'columns')}>
          {process.note.length > 0 ? <div {...currentTheme(4, 'processModal_description')}>{process.note}</div> : ''}
          {process.processCommitments.length > 0 ?
            <div {...currentTheme(14, 'processModal_section')}>
              <TasksList
                currentTheme={currentTheme}
                process={process}
                type={'work'}
              />
              <TasksList
                currentTheme={currentTheme}
                process={process}
                type={'consume'}
              />
              <TasksList
                currentTheme={currentTheme}
                process={process}
                type={'cite'}
              />
              <TasksList
                currentTheme={currentTheme}
                process={process}
                type={'use'}
              />
              <TasksList
                currentTheme={currentTheme}
                process={process}
                type={'produce'}
              />
              <TasksList
                currentTheme={currentTheme}
                process={process}
                type={'improve'}
              />
              <TasksList
                currentTheme={currentTheme}
                process={process}
                type={'accept'}
              />
            </div>
          : ''}
        </div>
        <div {...currentTheme(33, 'medium-4', 'columns')}>
          {process.workingAgents.length > 0 ?
            <div {...currentTheme(5, 'processModal_section')}>
              <h4>Members</h4>
              <div {...currentTheme(6, 'sections_photo')}>
                {process.workingAgents.map(agent => <span {...currentTheme(7 + agent.id, 'photo_item')}><img alt={agent ? agent.name : ''} src={agent.image} /></span> )}
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

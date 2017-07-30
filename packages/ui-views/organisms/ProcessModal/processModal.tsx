import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'
import BindProcess, { AgentType } from '@vflows/bindings/process/process'
import {Activity, Edit, Heart, Inbox, Users} from '../../icons'

interface Props {
  theme: Object,
  data: Object,
  note: String
}

const ProcessModal: SFC<Props> = BindProcess(({process, loading, error, theme, modalId, handleCloseModal}) => {
  console.log(theme)
  let currentTheme = themeable(theme)
  console.log(process)
  console.log(error)
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
              {process.processCommitments.filter(item => item.action === 'work').length > 0 || process.unplannedEconomicEvents.filter(item => item.action === 'work').length > 0   ?
                <div>
                  <h4>Work</h4>
                  <div {...currentTheme(15, 'sections_tasks')}>
                    {process.processCommitments.filter(item => item.action === 'work').map((input, i) => (
                      <div {...currentTheme((i*2) + 16000, 'tasks_item', input.isFinished)}>
                        <div {...currentTheme(i + 39023944444323023, 'item_info')}>
                          <h3 {...currentTheme((i*2) + 17000, 'item_title' , input.isFinished)}>{input.committedTaxonomyItem.name + ': ' + input.committedQuantity.numericValue + ' ' +  input.committedQuantity.unit.name}</h3>
                          <h5>{input.due}</h5>
                          {input.provider ? <span {...currentTheme((i*5) + 39393939339, 'item_image')}><img src={input.provider ? input.provider.image : ''} /></span> : ''}
                          <p>{input.note || ''}</p>
                          <div {...currentTheme((i*5) + 129218218218218, 'item_actions')}>
                            <button><span><Activity /></span> Log</button>
                            <button><span><Heart /></span> Join</button>
                            <button><span><Edit /></span> Edit</button>
                          </div>
                        </div>
                        {input.fulfilledBy.length > 0 ?
                        <div {...currentTheme((i*4) + 1993334, 'item_activities')}>
                          <span>{input.fulfilledBy.length + ' '} Activities</span>
                          {input.fulfilledBy.map((ev, i) => (
                            <div key={i}><b>{ev.provider ? ev.provider.name : ''}</b>{ ' ' + ev.action + ' ' + ev.affectedQuantity.numericValue + ' ' + ev.affectedQuantity.unit.name} <span>{ ' - ' + ev.start}</span></div>
                          ))}
                        </div> : ''}
                      </div>
                    ))}
                  </div>
                   <div {...currentTheme(154328938938923289, 'sections_tasks')}>
                    {process.unplannedEconomicEvents.filter(item => item.action === 'work').map((input, i) => (
                      <div {...currentTheme((i*230823) + 163889238000, 'tasks_item', 'sections_unplanned')}>
                        <div {...currentTheme((i*390232) + 173808238923000, 'item_title')}>{input.provider ? <span><img src={input.provider ? input.provider.image : ''} /></span> : ''} <b>{input.provider.name}</b>  {' ' + input.action + ' ' + input.affectedQuantity.numericValue + ' ' +  input.affectedQuantity.unit.name  + ' ' + input.affectedTaxonomyItem.name} <o>{  ' - ' + input.start}</o></div>
                        <p>{input.note || ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
              : ''}
              {process.processCommitments.filter(item => item.action === 'consume').length > 0 ?
                <div>
                  <h4>Consumable Inputs</h4>
                  <div {...currentTheme(15, 'sections_tasks')}>
                    {process.processCommitments.filter(item => item.action === 'consume').map((input, i) => (
                       <div {...currentTheme((i*2) + 16000, 'tasks_item', input.isFinished)}>
                        <div {...currentTheme(i + 39023944444323023, 'item_info')}>
                          <h3 {...currentTheme((i*2) + 17000, 'item_title' , input.isFinished)}>{input.committedTaxonomyItem.name + ': ' + input.committedQuantity.numericValue + ' ' +  input.committedQuantity.unit.name}</h3>
                          <h5>{input.due}</h5>
                          {input.provider ? <span {...currentTheme((i*5) + 39393939339, 'item_image')}><img src={input.provider ? input.provider.image : ''} /></span> : ''}
                          <p>{input.note || ''}</p>
                          <div {...currentTheme((i*5) + 129218218218218, 'item_actions')}>
                            <button><span><Activity /></span> Log</button>
                            <button><span><Heart /></span> Join</button>
                            <button><span><Edit /></span> Edit</button>
                          </div>
                        </div>
                        {input.fulfilledBy.length > 0 ?
                        <div {...currentTheme((i*4) + 1993334, 'item_activities')}>
                          <span>{input.fulfilledBy.length + ' '} Activities</span>
                          {input.fulfilledBy.map((ev, i) => (
                            <div key={i}><b>{ev.provider ? ev.provider.name : ''}</b>{ ' ' + ev.action + ' ' + ev.affectedQuantity.numericValue + ' ' + ev.affectedQuantity.unit.name} <span>{ ' - ' + ev.start}</span></div>
                          ))}
                        </div> : ''}
                      </div>
                    ))}
                  </div>
                  <div {...currentTheme(154328938938923289, 'sections_tasks')}>
                    {process.unplannedEconomicEvents.filter(item => item.action === 'consume').map((input, i) => (
                      <div {...currentTheme((i*230823) + 163889238000, 'tasks_item', 'sections_unplanned')}>
                        <div {...currentTheme((i*390232) + 173808238923000, 'item_title')}>{input.provider ? <span><img src={input.provider ? input.provider.image : ''} /></span> : ''} <b>{input.provider.name}</b>  {' ' + input.action + ' ' + input.affectedQuantity.numericValue + ' ' +  input.affectedQuantity.unit.name  + ' ' + input.affectedTaxonomyItem.name} <o>{  ' - ' + input.start}</o></div>
                        <p>{input.note || ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
              : ''}
              {process.processCommitments.filter(item => item.action === 'cite').length > 0 ?
                <div>
                  <h4>Cite</h4>
                  <div {...currentTheme(1609349034094309, 'sections_tasks')}>
                    {process.processCommitments.filter(item => item.action === 'cite').map((input, i) => (
                       <div {...currentTheme((i*2) + 16000, 'tasks_item', input.isFinished)}>
                        <div {...currentTheme(i + 39023944444323023, 'item_info')}>
                          <h3 {...currentTheme((i*2) + 17000, 'item_title' , input.isFinished)}>{input.committedTaxonomyItem.name + ': ' + input.committedQuantity.numericValue + ' ' +  input.committedQuantity.unit.name}</h3>
                          <h5>{input.due}</h5>
                          {input.provider ? <span {...currentTheme((i*5) + 39393939339, 'item_image')}><img src={input.provider ? input.provider.image : ''} /></span> : ''}
                          <p>{input.note || ''}</p>
                          <div {...currentTheme((i*5) + 129218218218218, 'item_actions')}>
                            <button><span><Activity /></span> Log</button>
                            <button><span><Heart /></span> Join</button>
                            <button><span><Edit /></span> Edit</button>
                          </div>
                        </div>
                        {input.fulfilledBy.length > 0 ?
                        <div {...currentTheme((i*4) + 1993334, 'item_activities')}>
                          <span>{input.fulfilledBy.length + ' '} Activities</span>
                          {input.fulfilledBy.map((ev, i) => (
                            <div key={i}><b>{ev.provider ? ev.provider.name : ''}</b>{ ' ' + ev.action + ' ' + ev.affectedQuantity.numericValue + ' ' + ev.affectedQuantity.unit.name} <span>{ ' - ' + ev.start}</span></div>
                          ))}
                        </div> : ''}
                      </div>
                    ))}
                  </div>
                  <div {...currentTheme(154328938938923289, 'sections_tasks')}>
                    {process.unplannedEconomicEvents.filter(item => item.action === 'cite').map((input, i) => (
                      <div {...currentTheme((i*230823) + 163889238000, 'tasks_item', 'sections_unplanned')}>
                        <div {...currentTheme((i*390232) + 173808238923000, 'item_title')}>{input.provider ? <span><img src={input.provider ? input.provider.image : ''} /></span> : ''} <b>{input.provider.name}</b>  {' ' + input.action + ' ' + input.affectedQuantity.numericValue + ' ' +  input.affectedQuantity.unit.name  + ' ' + input.affectedTaxonomyItem.name} <o>{  ' - ' + input.start}</o></div>
                        <p>{input.note || ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
              : ''}
              {process.processCommitments.filter(item => item.action === 'use').length > 0 ?
                <div>
                  <h4>Usable Inputs</h4>
                  <div {...currentTheme(160934903334094309, 'sections_tasks')}>
                    {process.processCommitments.filter(item => item.action === 'use').map((input, i) => (
                       <div {...currentTheme((i*2) + 16000, 'tasks_item', input.isFinished)}>
                        <div {...currentTheme(i + 39023944444323023, 'item_info')}>
                          <h3 {...currentTheme((i*2) + 17000, 'item_title' , input.isFinished)}>{input.committedTaxonomyItem.name + ': ' + input.committedQuantity.numericValue + ' ' +  input.committedQuantity.unit.name}</h3>
                          <h5>{input.due}</h5>
                          {input.provider ? <span {...currentTheme((i*5) + 39393939339, 'item_image')}><img src={input.provider ? input.provider.image : ''} /></span> : ''}
                          <p>{input.note || ''}</p>
                          <div {...currentTheme((i*5) + 129218218218218, 'item_actions')}>
                            <button><span><Activity /></span> Log</button>
                            <button><span><Heart /></span> Join</button>
                            <button><span><Edit /></span> Edit</button>
                          </div>
                        </div>
                        {input.fulfilledBy.length > 0 ?
                        <div {...currentTheme((i*4) + 1993334, 'item_activities')}>
                          <span>{input.fulfilledBy.length + ' '} Activities</span>
                          {input.fulfilledBy.map((ev, i) => (
                            <div key={i}><b>{ev.provider ? ev.provider.name : ''}</b>{ ' ' + ev.action + ' ' + ev.affectedQuantity.numericValue + ' ' + ev.affectedQuantity.unit.name} <span>{ ' - ' + ev.start}</span></div>
                          ))}
                        </div> : ''}
                      </div>
                    ))}
                  </div>
                  <div {...currentTheme(154328938938923289, 'sections_tasks')}>
                    {process.unplannedEconomicEvents.filter(item => item.action === 'use').map((input, i) => (
                      <div {...currentTheme((i*230823) + 163889238000, 'tasks_item', 'sections_unplanned')}>
                        <div {...currentTheme((i*390232) + 173808238923000, 'item_title')}>{input.provider ? <span><img src={input.provider ? input.provider.image : ''} /></span> : ''} <b>{input.provider.name}</b>  {' ' + input.action + ' ' + input.affectedQuantity.numericValue + ' ' +  input.affectedQuantity.unit.name  + ' ' + input.affectedTaxonomyItem.name} <o>{  ' - ' + input.start}</o></div>
                        <p>{input.note || ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
              : ''}
              {process.processCommitments.filter(item => item.action === 'produce').length > 0 ?
                <div>
                  <h4>produce</h4>
                  <div {...currentTheme(1609349033340394309, 'sections_tasks')}>
                    {process.processCommitments.filter(item => item.action === 'produce').map((input, i) => (
                      <div {...currentTheme((i*2) + 16000, 'tasks_item', input.isFinished)}>
                        <div {...currentTheme(i + 39023944444323023, 'item_info')}>
                          <h3 {...currentTheme((i*2) + 17000, 'item_title' , input.isFinished)}>{input.committedTaxonomyItem.name + ': ' + input.committedQuantity.numericValue + ' ' +  input.committedQuantity.unit.name}</h3>
                          <h5>{input.due}</h5>
                          {input.provider ? <span {...currentTheme((i*5) + 39393939339, 'item_image')}><img src={input.provider ? input.provider.image : ''} /></span> : ''}
                          <p>{input.note || ''}</p>
                          <div {...currentTheme((i*5) + 129218218218218, 'item_actions')}>
                            <button><span><Activity /></span> Log</button>
                            <button><span><Heart /></span> Join</button>
                            <button><span><Edit /></span> Edit</button>
                          </div>
                        </div>
                        {input.fulfilledBy.length > 0 ?
                        <div {...currentTheme((i*4) + 1993334, 'item_activities')}>
                          <span>{input.fulfilledBy.length + ' '} Activities</span>
                          {input.fulfilledBy.map((ev, i) => (
                            <div key={i}><b>{ev.provider ? ev.provider.name : ''}</b>{ ' ' + ev.action + ' ' + ev.affectedQuantity.numericValue + ' ' + ev.affectedQuantity.unit.name} <span>{ ' - ' + ev.start}</span></div>
                          ))}
                        </div> : ''}
                      </div>
                    ))}
                  </div>
                  <div {...currentTheme(154328938938923289, 'sections_tasks')}>
                    {process.unplannedEconomicEvents.filter(item => item.action === 'produce').map((input, i) => (
                      <div {...currentTheme((i*230823) + 163889238000, 'tasks_item', 'sections_unplanned')}>
                        <div {...currentTheme((i*390232) + 173808238923000, 'item_title')}>{input.provider ? <span><img src={input.provider ? input.provider.image : ''} /></span> : ''} <b>{input.provider.name}</b>  {' ' + input.action + ' ' + input.affectedQuantity.numericValue + ' ' +  input.affectedQuantity.unit.name  + ' ' + input.affectedTaxonomyItem.name} <o>{  ' - ' + input.start}</o></div>
                        <p>{input.note || ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
              : ''}
              {process.processCommitments.filter(item => item.action === 'improve').length > 0 ?
                <div>
                  <h4>improve</h4>
                  <div {...currentTheme(1609349434094309, 'sections_tasks')}>
                    {process.processCommitments.filter(item => item.action === 'improve').map((input, i) => (
                      <div {...currentTheme((i*2) + 16000, 'tasks_item', input.isFinished)}>
                        <div {...currentTheme(i + 39023944444323023, 'item_info')}>
                          <h3 {...currentTheme((i*2) + 17000, 'item_title' , input.isFinished)}>{input.committedTaxonomyItem.name + ': ' + input.committedQuantity.numericValue + ' ' +  input.committedQuantity.unit.name}</h3>
                          <h5>{input.due}</h5>
                          {input.provider ? <span {...currentTheme((i*5) + 39393939339, 'item_image')}><img src={input.provider ? input.provider.image : ''} /></span> : ''}
                          <p>{input.note || ''}</p>
                          <div {...currentTheme((i*5) + 129218218218218, 'item_actions')}>
                            <button><span><Activity /></span> Log</button>
                            <button><span><Heart /></span> Join</button>
                            <button><span><Edit /></span> Edit</button>
                          </div>
                        </div>
                        {input.fulfilledBy.length > 0 ?
                        <div {...currentTheme((i*4) + 1993334, 'item_activities')}>
                          <span>{input.fulfilledBy.length + ' '} Activities</span>
                          {input.fulfilledBy.map((ev, i) => (
                            <div key={i}><b>{ev.provider ? ev.provider.name : ''}</b>{ ' ' + ev.action + ' ' + ev.affectedQuantity.numericValue + ' ' + ev.affectedQuantity.unit.name} <span>{ ' - ' + ev.start}</span></div>
                          ))}
                        </div> : ''}
                      </div>
                    ))}
                  </div>
                  <div {...currentTheme(154328938938923289, 'sections_tasks')}>
                    {process.unplannedEconomicEvents.filter(item => item.action === 'improve').map((input, i) => (
                      <div {...currentTheme((i*230823) + 163889238000, 'tasks_item', 'sections_unplanned')}>
                        <div {...currentTheme((i*390232) + 173808238923000, 'item_title')}>{input.provider ? <span><img src={input.provider ? input.provider.image : ''} /></span> : ''} <b>{input.provider.name}</b>  {' ' + input.action + ' ' + input.affectedQuantity.numericValue + ' ' +  input.affectedQuantity.unit.name  + ' ' + input.affectedTaxonomyItem.name} <o>{  ' - ' + input.start}</o></div>
                        <p>{input.note || ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
              : ''}
              {process.processCommitments.filter(item => item.action === 'accept').length > 0 ?
                <div>
                  <h4>accept</h4>
                  <div {...currentTheme(16093495094309, 'sections_tasks')}>
                    {process.processCommitments.filter(item => item.action === 'accept').map((input, i) => (
                      <div {...currentTheme((i*2) + 16000, 'tasks_item', input.isFinished)}>
                        <div {...currentTheme(i + 39023944444323023, 'item_info')}>
                          <h3 {...currentTheme((i*2) + 17000, 'item_title' , input.isFinished)}>{input.committedTaxonomyItem.name + ': ' + input.committedQuantity.numericValue + ' ' +  input.committedQuantity.unit.name}</h3>
                          <h5>{input.due}</h5>
                          {input.provider ? <span {...currentTheme((i*5) + 39393939339, 'item_image')}><img src={input.provider ? input.provider.image : ''} /></span> : ''}
                          <p>{input.note || ''}</p>
                          <div {...currentTheme((i*5) + 129218218218218, 'item_actions')}>
                            <button><span><Activity /></span> Log</button>
                            <button><span><Heart /></span> Join</button>
                            <button><span><Edit /></span> Edit</button>
                          </div>
                        </div>
                        {input.fulfilledBy.length > 0 ?
                        <div {...currentTheme((i*4) + 1993334, 'item_activities')}>
                          <span>{input.fulfilledBy.length + ' '} Activities</span>
                          {input.fulfilledBy.map((ev, i) => (
                            <div key={i}><b>{ev.provider ? ev.provider.name : ''}</b>{ ' ' + ev.action + ' ' + ev.affectedQuantity.numericValue + ' ' + ev.affectedQuantity.unit.name} <span>{ ' - ' + ev.start}</span></div>
                          ))}
                        </div> : ''}
                      </div>
                    ))}
                  </div>
                  <div {...currentTheme(154328938938923289, 'sections_tasks')}>
                    {process.unplannedEconomicEvents.filter(item => item.action === 'accept').map((input, i) => (
                      <div {...currentTheme((i*230823) + 163889238000, 'tasks_item', 'sections_unplanned')}>
                        <div {...currentTheme((i*390232) + 173808238923000, 'item_title')}>{input.provider ? <span><img src={input.provider ? input.provider.image : ''} /></span> : ''} <b>{input.provider.name}</b>  {' ' + input.action + ' ' + input.affectedQuantity.numericValue + ' ' +  input.affectedQuantity.unit.name  + ' ' + input.affectedTaxonomyItem.name} <o>{  ' - ' + input.start}</o></div>
                        <p>{input.note || ''}</p>
                      </div>
                    ))}
                  </div>
                </div>
              : ''}
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

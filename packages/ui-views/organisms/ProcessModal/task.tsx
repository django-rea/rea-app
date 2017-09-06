import * as React from 'react'
import TaskActions from './task_actions'
import TaskActivities from './task_activities'
import AgentAvatar from './agentAvatar'

const Task = ({currentTheme, input}) => {
  return (
  <div {...currentTheme(1, 'tasks_item', input.isFinished)}>
    <div {...currentTheme(2, 'item_info')}>
      <h3 {...currentTheme(3, 'item_title' , input.isFinished)}>{input.affects.resourceClassifiedAs.name + ': ' + input.committedQuantity.numericValue} {input.committedQuantity.unit ? input.committedQuantity.unit.name : 'any' }</h3>
      <h5>{input.due}</h5>

      <p>{input.note || ''}</p>
      <TaskActions
        currentTheme={currentTheme}
      />
    </div>
    <TaskActivities
      currentTheme={currentTheme}
      input={input}
    />
  </div>
)}

export default Task

import * as React from 'react'
import Task from './task'
import TaskUnplanned from './task_unplanned'

const TasksList = ({currentTheme, process, type}) => (
  <div>
    {process.processCommitments.filter(item => item.action === type).length > 0 || process.unplannedEconomicEvents.filter(item => item.action === type).length > 0   ?
    <div {...currentTheme(1, 'sections_tasks')}>
      <h4>{type}</h4>
      {process.processCommitments.filter(item => item.action === type).map((input, i) => (
        <Task
          currentTheme={currentTheme}
          input={input}
          key={i}
        />
      ))}
      <div {...currentTheme(2, 'sections_tasks')}>
        {process.unplannedEconomicEvents.filter(item => item.action === type).map((input, i) => (
          <TaskUnplanned
            currentTheme={currentTheme}
            input={input}
            key={i}
          />
        ))}
      </div>
    </div>
    : ''}
  </div>
)

export default TasksList

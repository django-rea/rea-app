import * as React from 'react'

const TaskActivities = ({currentTheme, input}) => (
  <div>
    {input.fulfilledBy.length > 0 ?
      <div {...currentTheme(1, 'item_activities')}>
        <span>{input.fulfilledBy.length + ' '} Activities</span>
        {input.fulfilledBy.map((ev, i) => (
          <div key={i}><b>{ev.provider ? ev.provider.name : ''}</b>{ ' ' + ev.action + ' ' + ev.affectedQuantity.numericValue + ' ' + ev.affectedQuantity.unit.name} <span>{ ' - ' + ev.start}</span></div>
        ))}
      </div>
    : ''}
  </div>
)

export default TaskActivities

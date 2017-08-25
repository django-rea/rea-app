import * as React from 'react'

const TaskActivities = ({currentTheme, input}) => (
  <div>
    {input.fulfilledBy.length > 0 ?
      <div {...currentTheme(1, 'item_activities')}>
        <span>{input.fulfilledBy.length + ' '} Activities</span>
        {input.fulfilledBy.map((ev, i) => (
          <div key={i}><b>{ev.economicEvent.provider ? ev.economicEvent.provider.name : ''}</b>{ ' ' + ev.economicEvent.action + ' ' + ev.fulfilledQuantity.numericValue + ' ' + ev.fulfilledQuantity.unit.name} <span>{ ' - ' + ev.economicEvent.start}</span></div>
        ))}
      </div>
    : ''}
  </div>
)

export default TaskActivities

import * as React from 'react'
import AgentAvatar from './agentAvatar'

const TaskUnplanned = ({currentTheme, input}) => (
  <div {...currentTheme(1, 'tasks_item', 'sections_unplanned')}>
    <div {...currentTheme(2, 'item_title')}>
      {input.provider ? <AgentAvatar currentTheme={currentTheme} photo={input.provider.image} name={input.provider.name} />: ''}
      <b>{input.provider.name}</b>
      {' ' + input.action + ' ' + input.affectedQuantity.numericValue + ' ' +  input.affectedQuantity.unit.name  + ' ' + input.affectedResource.resourceTaxonomyItem.name}
      <o>{  ' - ' + input.start}</o>
    </div>
    <p>{input.note || ''}</p>
  </div>
)

export default TaskUnplanned

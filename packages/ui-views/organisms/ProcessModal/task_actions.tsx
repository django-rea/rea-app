import * as React from 'react'
import {Activity, Edit, Heart, Inbox, Users} from '../../icons'

const TaskActions = ({currentTheme}) => (
  <div {...currentTheme(1, 'item_actions')}>
    <button><span><Activity /></span> Log</button>
    <button><span><Heart /></span> Join</button>
    <button><span><Edit /></span> Edit</button>
  </div>
)

export default TaskActions

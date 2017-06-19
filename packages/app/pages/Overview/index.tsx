/**
 * Overview page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-04-06
 */

import * as React from 'react'
import ProjectTemplate from '@vflows/views/templates/ProjectTemplate'

import Sidebar from '@vflows/views/organisms/Sidebar'
import Overview from '@vflows/views/organisms/Overview'
import Members from '@vflows/views/organisms/Members'
import List from '@vflows/views/organisms/List'


const OverviewPage = (props) => {
  console.log('here')
  console.log(props)
  return (
    <div>
      <Overview id={props.params.id} />
      <Members />
      <List />
    </div>
  )
}

export default OverviewPage

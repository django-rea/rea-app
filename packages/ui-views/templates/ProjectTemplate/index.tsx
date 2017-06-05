import * as React from 'react'
const styles = require('./index.scss')
import Sidebar from '../../organisms/Sidebar'
import SecondaryMenu from '../../organisms/SecondaryMenu'

const ProjectTemplate = (props) => {
  return (
    <div>
        <Sidebar />
        <article>
        <SecondaryMenu />
        <div {...props} className={styles.ProjectTemplate}>{props.children}</div>
        </article>
    </div>
  )
}

export default ProjectTemplate

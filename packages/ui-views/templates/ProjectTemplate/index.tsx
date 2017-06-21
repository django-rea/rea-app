import * as React from 'react'
const styles = require('./index.scss')
import Sidebar from '../../organisms/Sidebar'
import SecondaryMenu from '../../organisms/SecondaryMenu'

const ProjectTemplate = (props) => {
  return (
  <div>
    <Sidebar />
    <article>
      <SecondaryMenu id={props.params.id} />
      <div {...props} className={styles.ProjectTemplate}>
        {props.children && React.cloneElement(props.children, {
          id: props.params.id
        })}
      </div>
    </article>
  </div>
)}

export default ProjectTemplate

import React from 'react'
import styles from './PageTemplate.css'

const PageTemplate = (props) => {
  return (
    <div {...props} className={styles.pageTemplate}>{props.children}</div>
  )
}

export default PageTemplate

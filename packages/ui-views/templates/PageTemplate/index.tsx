import * as React from 'react'
const styles = require('./PageTemplate.css')

const PageTemplate = (props, styles) => {
  return (
    <div {...props} className={styles.pageTemplate}>{props.children}</div>
  )
}

export default PageTemplate

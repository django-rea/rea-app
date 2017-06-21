import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  note: String,
  theme: Object
}


const ProjectDescription: SFC<Props> = ({ theme, note }) => {
    let currentTheme = themeable(theme)
    return (
      <section {...currentTheme(1, 'projectDescription')} >
        <div {...currentTheme(3, 'description')} >{note}</div>
      </section>
    )
  }


export default ProjectDescription

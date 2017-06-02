import * as React from 'react'
import * as themeable from 'react-themeable'
import { SFC } from 'react'

interface Props {
  theme: Object
}

const ProjectDescription: SFC<Props> = ({ theme }) => {
    let currentTheme = themeable(theme)
    return (
     <section {...currentTheme(1, 'projectDescription')} >
        <h4 {...currentTheme(2, 'description_title')} >Project description</h4>
        <div {...currentTheme(3, 'description')} >Everybody that has ever been to a meeting, can recall the all familiar “passing” of the business cards. This powerfull marketing tool is often used matter of factly, and we have to wonder how often does the recipient of your card hold on to it, and use your business information positively?
In a world where first impressions count and business is becoming more competitive, it would be foolish to go with the crowd.</div>
    </section>
    )
  }
}

export default ProjectDescription

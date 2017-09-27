/**
 * AllProjects page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-08-07
 */

import * as React from 'react'
import * as themeable from 'react-themeable'
import BindAgent, { AllOrgsType } from '@vflows/bindings/agent/allOrganizations'
import Link from '@vflows/views/atoms/Link'

interface Props {
  allOrgs?: AllOrgsType,
  loading?: boolean,
  error?: Error,
  theme: Object,
  children: Object
}

// class NavBar extends React.Component {
//   state: {
//     activeIndex: null
//   }
//
//   handleClick = (index) => {
//     this.setState({ activeIndex: index })
//     console.log('Clicked', index)
//   }
//
//   render() {
//     return (
//       <div {currentTheme}>
//         <NavButton
//           name="a"
//           index={0}
//           isActive={this.props.activeIndex === 0}
//           onClick={this.handleClick}
//         />
//         <NavButton
//           name="b"
//           index={1}
//           isActive={this.props.activeIndex === 1}
//           onClick={this.handleClick}
//         />
//         <NavButton
//           name="c"
//           index={2}
//           isActive={this.props.activeIndex === 2}
//           onClick={this.handleClick}
//         />
//       </div>
//     )
//   }
// }

class NavButton extends React.Component {
  handleClick= () => this.props.onClick(this.props.index)

  render() {
    return (
      <button
        type="button"
        className={this.props.isActive ? "active" : ""}
        onClick={this.handleClick}
      >
        <span>{this.props.name}</span>
      </button>
    )
  }
}


const AllProjectsPage = BindAgent(({ allOrgs, loading, error, theme, children }: Props) => {

  let state: {
    activeIndex: null
  }

  let handleClick = (index) => {
    this.setState({ activeIndex: index })
    console.log('Clicked', index)
  }

  let currentTheme = themeable(theme)

  return (
    loading ? <strong>Loading...</strong> : (
      error ? <p style={{ color: '#F00' }}>API error</p> : (
        <section  {...currentTheme(1, 'allprojects_list')}>
          <div {...currentTheme(2, 'list_menu')}>
            <ul id="project_type" {...currentTheme(3, 'menu_type')}>
              <NavButton name="All" index={2} isActive={this.props.activeIndex === 0} onClick={this.handleClick} {...currentTheme(4, 'type_item')}/>
              {/*<li onClick={(event) => handleClick(event)} {...currentTheme(4, 'type_item', 'active')}>All</li>*/}
              <li onClick={(event) => handleClick(event)} {...currentTheme(5, 'type_item')}>Cooperative</li>
              <li onClick={(event) => handleClick(event)} {...currentTheme(6, 'type_item')}>Projects</li>
              <li onClick={(event) => handleClick(event)} {...currentTheme(7, 'type_item')}>Organizations</li>
              <li onClick={(event) => handleClick(event)} {...currentTheme(8, 'type_item')}>Groups</li>
            </ul>
            <div {...currentTheme(9, 'menu_actions')}>
              <button {...currentTheme(10, 'actions_join')}>Create a new Project</button>
            </div>
          </div>
          <div {...currentTheme(11, 'list_projects')}>
            <div {...currentTheme(12, 'row')}>
              {allOrgs.map((org, i)=>(
                org.type === "School" || org.type === "Library" ?
                  <div {...currentTheme((i*7) + 13, 'medium-6',  'end', 'columns')}>
                    <div {...currentTheme((i*7) +14, 'projects_item')}>
                      <div {...currentTheme((i*7) +15, 'item_row')}>
                        <span {...currentTheme((i*7) +16, 'row_image')}><img src={org.image} /></span>
                        <Link href={`projects/${org.id}` } {...currentTheme((i*7) +17, 'row_title')}>{org.name}</Link>
                        <button onClick={() => alert("Cannot join this team")} {...currentTheme((i*7) +18, 'row_button')}>+ join</button>
                      </div>
                      <div {...currentTheme((i*7) +19, 'item_description')}>{org.note}</div>
                    </div>
                  </div> : null
              ))}
            </div>
          </div>
        </section>
      )))
});

// let handleClick = function(event) {
//   console.log('Item:', event.currentTarget);
//   // event.currentTarget.addClass("active").siblings().removeClass("active")
//   event.currentTarget.setActive(true);
// }

export default AllProjectsPage

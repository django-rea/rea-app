/**
 * AllProjects page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-08-07
 */

import * as React from "react"
import * as themeable from "react-themeable"
import BindAgent, { AllOrgsType } from "@vflows/bindings/agent/allOrganizations"
import Link from "@vflows/views/atoms/Link"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

interface Props {
  allOrgs?: AllOrgsType,
  loading?: boolean,
  error?: Error,
  theme: Object,
  children: Object
}

/**
 * Row of buttons to filter which user agent types should be displayed
 */
class NavBar extends React.Component {

  readonly navButtons = ["All", "Cooperative", "Projects", "Organizations", "Groups"]

  private currentTheme;

  constructor(private props) {
    super(props)
    this.state = {
      activeButton: "All",
    };

    this.currentTheme = themeable(this.props.theme)
  }

  /**
   * Handler function for when buttons are pressed.
   * TODO apply the filter to the user agents
   * @param buttonName the text of the button that was clicked
   */
  handleClick = (buttonName) => {
    this.setState({ activeButton: buttonName })
    this.forceUpdate(() => console.log('Finished Updating'))
    // this.state.activeButton  = buttonName
    console.log("Clicked", buttonName)
    // TODO refresh the list and filter
  };

  /**
   * Draws the filter buttons onto the filter bar
   * @returns {any}
   */
  render() {
    return (
      <div {...this.currentTheme(2, "list_menu")}>
        <ul id="project_type" {...this.currentTheme(3, "menu_type")}>

          {this.navButtons.map((text, index) => (
            <NavButton
              i={index + 4}
              text={text}
              theme={this.props.theme}
              onclick={this.handleClick}
              active={this.state.activeButton === text}
            />
          ))}

        </ul>
        <div {...this.currentTheme(9, "menu_actions")}>
          <button {...this.currentTheme(10, "actions_join")}>Create a new Project</button>
        </div>

      </div>
    )
  }
}

/**
 * A single filter button. Includes handler and metadata to determine
 * if it is currently active (or clicked)
 */
class NavButton extends React.Component {

  currentTheme = themeable(this.props.theme)

  render() {
    return (
      <li
        onClick={() => {
          console.log("Currently Active:", this.props.active)
          this.props.onclick(this.props.text)
          // this.props.state.activeButton = this.props.text
        }}
        {...this.currentTheme(this.props.i, "type_item", (this.props.active ? "active" : ""))}
      >
        {this.props.text}
      </li>
    )
  }
}

/**
 * A 'card' to display the user agent name, picture, and controls to
 * join with the user agent.
 */
class ProjectCard extends React.Component {

  currentTheme = themeable(this.props.theme)
  i = this.props.i

  render() {
    return (
      <div {...this.currentTheme((this.i * 7) + 13, "medium-6",  "end", "columns")}>
        <div {...this.currentTheme((this.i * 7) + 14, "projects_item")}>
          <div {...this.currentTheme((this.i * 7) + 15, "item_row")}>
            <span {...this.currentTheme((this.i * 7) + 16, "row_image")}><img src={this.props.org.image} /></span>
            <Link href={`projects/${this.props.org.id}`} {...this.currentTheme((this.i * 7) + 17, "row_title")}>{this.props.org.name}</Link>
            <button onClick={() => alert("Cannot join this team")} {...this.currentTheme((this.i * 7) + 18, "row_button")}>+ join</button>
          </div>
          <div {...this.currentTheme((this.i * 7) + 19, "item_description")}>{this.props.org.note}</div>
        </div>
      </div>
    )
  }
}

/**
 * The project page, which contains the filtering bar, and a grid of the project cards
 * to allow filtering all user agents down into a smaller, more navigable set
 * @type {any}
 */
const AllProjectsPage = BindAgent(({ allOrgs, loading, error, theme, children }: Props) => {
  let currentTheme = themeable(theme)

  return (
    loading ? <strong>Loading...</strong> : (
      error ? <p style={{ color: "#F00" }}>API error</p> : (
        <section  {...currentTheme(1, "allprojects_list")}>

          <NavBar theme={theme}/>

          <div {...currentTheme(11, "list_projects")}>
            <div {...currentTheme(12, "row")}>
              {allOrgs.map( (org, i) => (<ProjectCard theme={theme} org={org} i={i}/>))}
            </div>
          </div>

        </section>
      )
    )
  );
});

export default AllProjectsPage

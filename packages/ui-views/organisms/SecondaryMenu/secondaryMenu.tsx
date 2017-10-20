import * as React from "react"
import * as themeable from "react-themeable"
import { SFC } from "react"
import { withRouter, Link } from "react-router"
import Link from "../../atoms/Link/Link";

interface Props {
  theme: Object
}

const SecondaryMenu: SFC<Props> = ({ id, router, theme, totalProcesses, totalNetwork, totalInventory }) => {
  let currentTheme = themeable(theme)
  return (
      <section {...currentTheme(0, "secondaryMenu")}>
        <ul {...currentTheme(1, "menu_list")} >
            <li {...currentTheme(2, "list_item", router.isActive(`projects/${id}`, true) && "active")} >
                <Link to={`projects/${id}`} {...currentTheme(3, "item_link")} >
                    Recent
                </Link>
            </li>
            <li {...currentTheme(4, "list_item" , router.isActive(`projects/${id}/processes`, true) && "active")} >
                <Link to={`projects/${id}/processes`} {...currentTheme(5, "item_link")} >
                    <span>{totalProcesses}</span> Processes
                </Link>
            </li>
            <li {...currentTheme(6, "list_item", router.isActive(`projects/${id}/accounts`, true) && "active")} >
                <Link to={`projects/${id}/accounts`} {...currentTheme(7, "item_link")} >
                    Accounts
                </Link>
            </li>
            <li {...currentTheme(8, "list_item", router.isActive(`projects/${id}/members`, true) && "active")} >
                <Link to={`projects/${id}/members`} {...currentTheme(9, "item_link")} >
                    <span>{totalNetwork}</span> Network
                </Link>
            </li>
            <li {...currentTheme(9, "list_item", router.isActive(`projects/${id}/inventory`, true) && "active")} >
                <Link to={`projects/${id}/inventory`} {...currentTheme(10, "item_link")} >
                    <span>{totalInventory}</span> Inventory
                </Link>
            </li>
        </ul>
        {/*<div {...currentTheme(8, 'menu_actions', router.isActive(`projects/${id}`, true) && 'active')} >
            <button {...currentTheme(8, 'actions_process')} >Create new process</button>
        </div>*/}
      </section>
    )
  }

export default withRouter(SecondaryMenu)

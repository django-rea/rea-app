import * as React from "react"
import * as themeable from "react-themeable"
import { SFC } from "react"
import InventoryModal from "../../../ui-views/organisms/InventoryModal";

interface Props {
  theme: Object
}

/**
 * The current inventory item query results.
 * More information is stored in the databse,
 * but it is not being queried
 */
interface Item {
  resourceClassifiedAs: {
    name: string
  },
  trackingIdentifier: string,
  currentQuantity: {
    numericValue: number,
    units: string
  }
}

/**
 * A single inventory entry displayed in the column
 * of inventory items. Contains basic information
 * about what the item is and quantity
 */
class InventoryCard extends React.Component {

  private state;

  public constructor(private props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  public render() {
    let item = this.props.item;
    let type = item.resourceClassifiedAs.name;
    let title = item.trackingIdentifier;
    let quantity = item.currentQuantity.numericValue;
    let currentTheme = themeable(this.props.theme);

    return (
      <div>
        <InventoryModal
          theme={this.props.theme}
          show={this.state.showModal}
          item={item}
          onClose={() => this.closeDetails()}
        />
        <li {...currentTheme(0, "list_item")} >
          <span {...currentTheme(1, "item_type")} onClick={() => this.openDetails(item)}>{type}</span>
          <h3 {...currentTheme(2, "item_title")}>{title}</h3>
          <h4 {...currentTheme(3, "item_qty")}>{quantity === -1 ? <span>🚀</span> : quantity}</h4>
        </li>
      </div>
    )
  }

  /**
   * Handler to open the modal
   * @param {Item} item The item to display details on
   */
  private openDetails(item: Item) {
    this.setState({showModal: true});
  }

  /**
   * Handler to close the details modal
   */
  private closeDetails() {
    this.setState({showModal: false})
  }
}

/**
 * The inventory page, which contains the basic page structure
 * (menu, sidebar, sub-menus, and the entire inventory list)
 * @param {any} agent The agent who's inventory is displayed
 * @param {any} theme The page's theme that should be used to style
 */
const Inventory: SFC<Props> = ({ agent, theme }) => {
  let currentTheme = themeable(theme);
  console.log(agent);

  return (
    <aside {...currentTheme(1, "sidebar")} >
      <div {...currentTheme(2, "sidebar_menu")} >
        <h4 {...currentTheme(4, "menu_title")} >Inventory List <span>{agent.ownedEconomicResources.length}</span></h4>
      </div>
      <section {...currentTheme(5, "sidebar_inventory", "active")} >
        <ul {...currentTheme(8, "sidebar_list")} >
          {agent.ownedEconomicResources.map((item, i) => (
            <InventoryCard theme={theme} item={item} key={i}/>
          ))}
        </ul>
      </section>
    </aside>
  )
};

export default Inventory

import * as React from "react"
import * as Modal from "react-modal"
import * as themeable from "react-themeable"
import { SFC } from "react"
import { withRouter, Link } from "react-router"
import Link from "../../atoms/Link/Link";

/*
  Needs to have:
    - Item Name
    - Image
    - All properties of that object
 */

let inventoryModalStyle = {
  overlay : {
    position          : "fixed",
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : "rgba(255, 255, 255, 0.75)"
  },
  content : {
    position                   : "absolute",
    top                        : "40px",
    left                       : "40px",
    right                      : "40px",
    bottom                     : "40px",
    border                     : "1px solid #ccc",
    background                 : "#fff",
    overflow                   : "auto",
    WebkitOverflowScrolling    : "touch",
    borderRadius               : "4px",
    outline                    : "none",
    padding                    : "20px"

  }
};

class InventoryModal extends React.Component {

  private show = this.props.show;
  private theme = this.props.theme;
  private number = this.props.number;

  constructor(private props) {
    super(props);

    console.log("Inventory Modal");
    console.log("theme:", this.theme);
    console.log("number:", this.number);
    console.log("show:", this.show);
  }

  // TODO add in an X button on the top right of the modal
  render() {
    return !this.props.show ? null : (
      <div>
        <p>I am {this.show ? "showing" : "hiding"} {this.number} items</p>
        <Modal
          isOpen={this.show}
          contentLabel="My Inventory Process Modal"
          style={inventoryModalStyle}
          onRequestClose={() => alert("Requested Close")}
          className={{
            base: this.theme.responsiveModal,
          }}
        >
          <p>Awesome Modal Text</p>
          <InventoryDetails
            text={"These are the details"}
            theme={this.theme}
            org={{
              id: 8,
              image: "This is an image location",
              name: "My Org Name"
            }}
          />
        </Modal>
      </div>
    )
  }
}

class InventoryDetails extends React.Component {

  private responsiveModal;
  private currentTheme;

  constructor(private props) {
    super(props);
    this.responsiveModal = this.props.theme.responsiveModal;
    this.currentTheme = themeable(this.props.theme);
  }

  public render() {
    return (
      <div {...this.currentTheme(0, "medium-6",  "end", "columns")}>
        <div {...this.currentTheme(1, "projects_item")}>
          <div {...this.currentTheme(2, "item_row")}>
            <span {...this.currentTheme(3, "row_image")}><img src={this.props.org.image} /></span>
            <Link href={`projects/${this.props.org.id}`} {...this.currentTheme(4, "row_title")}>{this.props.org.name}</Link>
            <button onClick={() => alert("Cannot join this team")} {...this.currentTheme(5, "row_button")}>+ join</button>
          </div>
          <div {...this.currentTheme(6, "item_description")}>{this.props.org.note}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(InventoryModal);

// const SecondaryMenu = ({ id, router, theme, totalProcesses, totalNetwork, totalInventory }) => {
//   let currentTheme = themeable(theme)
//   return (
//
//     hidden ? null : (
//
//       <modal {...currentTheme(0, "modal")}>
//         <p>This is awesome modal text</p>
//       </modal>
//
//     )

// <section {...currentTheme(0, "secondaryMenu")}>
//   <ul {...currentTheme(1, "menu_list")} >
//     <li {...currentTheme(2, "list_item", router.isActive(`projects/${id}`, true) && "active")} >
//       <Link to={`projects/${id}`} {...currentTheme(3, "item_link")} >
//         Recent
//       </Link>
//     </li>
//     <li {...currentTheme(4, "list_item" , router.isActive(`projects/${id}/processes`, true) && "active")} >
//       <Link to={`projects/${id}/processes`} {...currentTheme(5, "item_link")} >
//         <span>{totalProcesses}</span> Processes
//       </Link>
//     </li>
//     <li {...currentTheme(6, "list_item", router.isActive(`projects/${id}/accounts`, true) && "active")} >
//       <Link to={`projects/${id}/accounts`} {...currentTheme(7, "item_link")} >
//         Accounts
//       </Link>
//     </li>
//     <li {...currentTheme(8, "list_item", router.isActive(`projects/${id}/members`, true) && "active")} >
//       <Link to={`projects/${id}/members`} {...currentTheme(9, "item_link")} >
//         <span>{totalNetwork}</span> Network
//       </Link>
//     </li>
//     <li {...currentTheme(9, "list_item", router.isActive(`projects/${id}/inventory`, true) && "active")} >
//       <Link to={`projects/${id}/inventory`} {...currentTheme(10, "item_link")} >
//         <span>{totalInventory}</span> Inventory
//       </Link>
//     </li>
//   </ul>
//   {/*<div {...currentTheme(8, 'menu_actions', router.isActive(`projects/${id}`, true) && 'active')} >
//         <button {...currentTheme(8, 'actions_process')} >Create new process</button>
//     </div>*/}
// </section>
//   )
// }
//
// export default withRouter(SecondaryMenu)

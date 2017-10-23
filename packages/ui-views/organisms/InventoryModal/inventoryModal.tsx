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

// let inventoryModalStyle = {
//   overlay : {
//     position          : "fixed",
//     top               : 0,
//     left              : 0,
//     right             : 0,
//     bottom            : 0,
//     backgroundColor   : "rgba(255, 255, 255, 0.75)"
//   },
//   content : {
//     // position                   : "absolute",
//     top : "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     width: "50%",
//     leftMargin: "auto",
//     rightMargin: "auto",
//     // top                        : "400px",
//     // left                       : "40px",
//     // right                      : "40px",
//     // bottom                     : "40px",
//     border                     : "1px solid #ccc",
//     background                 : "#fff",
//     overflow                   : "auto",
//     WebkitOverflowScrolling    : "touch",
//     borderRadius               : "4px",
//     outline                    : "none",
//     padding                    : "20px"
//   }
// };

class InventoryModal extends React.Component {

  private theme = this.props.theme;
  // private show = this.props.show;

  private state;

  constructor(private props) {
    super(props);
    console.log("Constructing the InventoryModal");

    this.state = {
      showModal: true
    }
  }

  defaultClose() {
    console.log("Show: ", this.state.showModal);
    alert("Closing Modal");
    this.setState({showModal: false});
    console.log("Show: ", this.state.showModal);
  }

  // TODO add in an X button on the top right of the modal
  render() {
    return !this.props.show ? null : (
      <div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="My Inventory Process Modal"
          onRequestClose={this.props.onClose === undefined ? () => this.defaultClose() : () => this.props.onClose()}
          className={{base: "modal-content"}}
          overlayClassName={{base: "modal-overlay"}}
        >
          <InventoryDetails theme={this.theme} item={this.props.item} />
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
    let item = this.props.item;
    // console.log("Rendering:", item);
    // console.log("Item Keys: ", Object.keys(item));
    let name = item.resourceClassifiedAs.name;
    let trackingID = item.trackingIdentifier;
    let quantity = item.currentQuantity.numericValue;
    let units = item.currentQuantity.unit.name;
    let imageAddress = "http://www.msoe.edu/about-msoe/wp-content/uploads/sites/7/2015/11/MSOE.jpg"; //item.image;
    let notes = item.notes;

    return (
      <div>
        <p>Name: {name}</p>
        <p>Tracking ID: {trackingID}</p>
        <p>Quantity: {quantity} {units}{quantity !== 1 ? "s" : ""}</p>
        <p>Image Location: {imageAddress}</p>
        <p>Notes: {notes}</p>
        <img src={imageAddress} height={500} width={500}/>
      </div>
    );

    // <div {...this.currentTheme(0, "medium-6",  "end", "columns")}>
    //   <div {...this.currentTheme(1, "projects_item")}>
    //     <div {...this.currentTheme(2, "item_row")}>
    //       <span {...this.currentTheme(3, "row_image")}><img src={this.props.org.image} /></span>
    //       <Link href={`projects/${this.props.org.id}`} {...this.currentTheme(4, "row_title")}>{this.props.org.name}</Link>
    //       <button onClick={() => alert("Cannot join this team")} {...this.currentTheme(5, "row_button")}>+ join</button>
    //     </div>
    //     <div {...this.currentTheme(6, "item_description")}>{this.props.org.note}</div>
    //   </div>
    // </div>
  }
}

export default withRouter(InventoryModal);

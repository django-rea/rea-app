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
    top                        : "50%",
    left                       : "50%",
    width                      : "50%",
    leftMargin                 : "auto",
    rightMargin                : "auto",
    transform                  : "translate(-50%, -50%)",
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
    this.setState({showModal: false});
  }

  // TODO add in an X button on the top right of the modal
  render() {
    return !this.props.show ? null : (
      <div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="My Inventory Process Modal"
          style={inventoryModalStyle}
          onRequestClose={this.props.onClose === undefined ? () => this.defaultClose() : () => this.props.onClose()}
          className={{base: this.theme.responsiveModal}}
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
  readonly unavailableURL = "http://picolas.de/wp-content/uploads/2015/12/picolas-picture-not-available.jpg";

  constructor(private props) {
    super(props);
    this.responsiveModal = this.props.theme.responsiveModal;
    this.currentTheme = themeable(this.props.theme);
  }

  public render() {
    let item = this.props.item;
    let name = item.resourceClassifiedAs.name;
    let trackingID = item.trackingIdentifier;
    let quantity = item.currentQuantity.numericValue;
    let units = item.currentQuantity.unit.name;
    let imageAddress = item.image;
    if (imageAddress === undefined || imageAddress === "") {
      imageAddress = this.unavailableURL;
    }
    let notes = item.notes;

    return (
      <div>
        <p>Name: {name}</p>
        <p>Tracking ID: {trackingID}</p>
        <p>Quantity: {quantity} {units}{quantity !== 1 ? "s" : ""}</p>
        <p>Notes: {notes}</p>
        <div style={{display: "block", textAlign: "center"}}>
          <img src={imageAddress} height={500} width={500} style={{leftMargin: "auto"}}/>
        </div>
      </div>
    );

  }
}

export default withRouter(InventoryModal);

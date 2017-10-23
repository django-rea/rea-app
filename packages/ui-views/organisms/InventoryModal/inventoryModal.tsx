import * as React from "react"
import * as Modal from "react-modal"
import * as themeable from "react-themeable"
import { SFC } from "react"
import { withRouter, Link } from "react-router"
import Link from "../../atoms/Link/Link";

/**
 * Custom stypes for the inventory modal (CSS equiv)
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

/**
 * This component is the popup modal that will display information about the
 * inventory items. It can be closed by clicking off of the modal or
 * clicking the [ close ] button
 */
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

  /**
   * Checks for a better close function. If one is present,
   * it uses that. Otherwise it defaults to hiding the modal
   */
  defaultClose() {
    if (this.props.onClose !== undefined) {
      console.log("The provided onClose method is valid");
      this.props.onClose();
      return;
    }

    console.log("There is no onClose method for everyone");
    this.setState({showModal: false});
  }

  /**
   * Draws the component to the screen. This is where all
   * of the elements are laid out
   */
  render() {
    return !this.props.show ? null : (
      <div>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="My Inventory Process Modal"
          style={inventoryModalStyle}
          onRequestClose={() => this.defaultClose()}
          className={{base: this.theme.responsiveModal}}
        >
          <InventoryDetails theme={this.theme} item={this.props.item} onClose={() => this.defaultClose()}/>
        </Modal>
      </div>
    )
  }
}

/**
 * All possible values for an inventory detail
 */
interface InventoryDetailProps {
  theme: any,
  onClose: any,
  item: {
    resourceClassifiedAs: {
      name: string,
      image: string,
      note: string,
      category: string,
      processCategory: string
    },
    trackingIdentifier: string,
    currentQuantity: {
      numericValue: number,
      unit: {
        name: string,
        symbol: string
      }
    },
    image: string,
    note: string
    category: string
  }
}

/**
 * Details that go inside of the modal when displaying more about a resource item.
 * Can also be used alone to just display information about an item.
 */
class InventoryDetails extends React.Component {

  private responsiveModal;
  private currentTheme;
  private readonly unavailableURL = "http://picolas.de/wp-content/uploads/2015/12/picolas-picture-not-available.jpg";

  constructor(private props: InventoryDetailProps) {
    super(props);
    this.responsiveModal = this.props.theme.responsiveModal;
    this.currentTheme = themeable(this.props.theme);
  }

  /**
   * This is where the details are drawn on the modal
   */
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
    let notes = item.note;

    return (
      <div>
        <div style={{display: "block", textAlign: "right"}}>
          <button style={{textAlign: "right"}} onClick={() => this.props.onClose()}>[ close ]</button>
        </div>
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

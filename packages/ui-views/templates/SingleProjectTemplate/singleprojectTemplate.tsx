import * as React from "react"
import Sidebar from "../../organisms/Sidebar"
import SecondaryMenu from "../../organisms/SecondaryMenu"
import ProcessModal from "../../organisms/ProcessModal"
import InventoryModal from "../../organisms/InventoryModal"
import * as themeable from "react-themeable"
import BindAgent, { AgentType } from "@vflows/bindings/agent/agent"
import { Vertical } from "../../icons"
import Modal from "react-modal"
import Aside from "../../organisms/Aside"

const customStyles = {
  overlay : {
    position          : "fixed",
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : "rgba(0, 0, 0, 0.65)",
    zIndex            : 9999999999,
    height: "100%",
    justifyContent: "center",
    overflow: "auto"
  },
  content : {
    width                 : "745px",
    boxShadow             : "0 2px 8px 3px rgba(0,0,0,.3)",
    zIndex                : 9999999999,
    backgroundColor       : "#EFEFEF",
    padding:  0,
    margin:  "40px auto",
    position: "relative"

  }
};

interface Props {
  agent?: AgentType,
  loading?: boolean,
  error?: Error,
  theme: Object,
  children: Object
}

interface RouterProps {
  theme: Object,
  children: any,
  router: {
    params: {
      id: string,
    },
  },
}

const SingleProjectTemplate = BindAgent(({ agent, loading, error, theme, children, showModal, handleOpenModal, handleCloseModal, modalId }: Props) => {
  let currentTheme = themeable(theme)

  console.log("Loading:", loading);
  console.log("Agent:", agent);
  console.log(error)

  let responsiveModal = theme.responsiveModal
  return (
    loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: "#F00" }}>API error</p> : (
      <div {...currentTheme(11, "row")}>
        <Aside />

        <div {...currentTheme(10, "medium-9", "columns")}>
          <div {...currentTheme(0, "row")}>
            <div {...currentTheme(1, "medium-12", "columns", "collapse-for-mobile")}>
              <div {...currentTheme(2, "context_overview")}>
                <div {...currentTheme(3, "overview_info")}>
                  <span {...currentTheme(4, "overview_photo")}><img src={agent.image}/></span>
                  <h2 {...currentTheme(5, "overview_name")}>{agent.name}</h2>
                </div>
                {/* <div {...currentTheme(7, 'overview_actions')}>
                  <button>Create new process</button>
                  <span {...currentTheme(8, 'actions_more')}>
                    <Vertical />
                  </span>
                </div> */}
              </div>
            </div>
            <section {...currentTheme(6, "medium-12", "columns", "collapse-for-mobile")}>
              <SecondaryMenu
                id={agent.id}
                totalProcesses={agent.agentProcesses.length}
                totalNetwork={agent.agentRelationships.length}
                totalInventory={agent.ownedEconomicResources.filter(resource => resource.category === "INVENTORY").length}
              />
              <div>
                {children && React.cloneElement(children, {
                  id: agent.id,
                  agent,
                  handleOpenModal
                })}
              </div>
            </section>
            {/*<div {...currentTheme(7, 'medium-4', 'columns')}>*/}
              {/*<Sidebar inventory={agent.ownedEconomicResources.filter(resource => resource.category === 'INVENTORY')} />*/}
            {/*</div>*/}
            {/*<Modal*/}
              {/*isOpen={showModal}*/}
              {/*onRequestClose={handleCloseModal}*/}
              {/*contentLabel='Process Modal'*/}
              {/*style={customStyles}*/}
              {/*className={{*/}
                {/*base: responsiveModal,*/}
              {/*}}*/}
            {/*>*/}
              {/*<ProcessModal handleCloseModal={handleCloseModal} modalId={modalId} />*/}
            {/*</Modal>*/}
          </div>
        </div>
      </div>
  )))})

// export default SingleProjectTemplate;

export default ({ router, theme, children, showModal, handleOpenModal, handleCloseModal, modalId }: RouterProps) => (
  <SingleProjectTemplate children={children} theme={theme} agentId={router.params.id} showModal={showModal} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} modalId={modalId} />
)

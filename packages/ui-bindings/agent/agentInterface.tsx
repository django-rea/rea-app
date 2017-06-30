export interface AgentType {
  id: number,
  note: string,
  image: string,
  agentProcesses?: Array<{
    id: number,
    name: string,
  }>,
  ownedEconomicResources?: Array<{
    id: number,
    resourceType: string,
  }>,
  economicEvents?: Array<Events>
  members?: Array<AgentType>,
}

export interface Events {
  id: number
  action: string
  start: string
  numericValue: number
  unit: string
  note: string
  workCategory: string
  affectedResource: Object
  provider: Object
  receiver: Object
  process: Object
}

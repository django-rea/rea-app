/**
 * Query fragments for Economic Agents
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-06-23
 */

import { gql } from 'react-apollo'

export const coreCommitmentFields = gql`
fragment coreCommitmentFields on Commitment {
  action
  plannedStart
  committedOn
  due
  note
  isFinished
  fulfilledBy {
    economicEvent {
      action
      start
      provider {
        name
      }
    }
    fulfilledQuantity {
      numericValue
      unit {
        name
      }
    }
  }
  committedQuantity {
    numericValue
    unit {
      name
    }
  }
  committedTaxonomyItem {
    name
    category
  }
  provider {
    id
    name
    image
  }
  receiver {
    id
    name
  }
  scope {
    id
    name
  }
}`


export const coreEventFields = gql`
fragment coreEventFields on EconomicEvent {
  action
  start
  note
  affectedQuantity {
    numericValue
    unit {
      name
    }
  }
  affectedResource {
     resourceTaxonomyItem {
      name
      category
    }
    trackingIdentifier
  }
  provider {
    id
    name
    image
  }
  receiver {
    id
    name
  }
}`

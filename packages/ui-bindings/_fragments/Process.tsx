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
  note
  commitmentStart
  committedOn
  due
  isFinished
  fulfilledBy {
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
      id
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
  affectedTaxonomyItem {
    name
    category
  }
  affectedResource {
    id
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

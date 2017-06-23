/**
 * Query fragments for Economic Agents
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-06-23
 */

import { gql } from 'react-apollo'

export const coreAgentFields = gql`
fragment coreAgentFields on Agent {
  id
  name
  image
}`

export const coreOrganizationFields = gql`
fragment coreOrganizationFields on Agent {
  ...coreAgentFields
  type
  note
}`

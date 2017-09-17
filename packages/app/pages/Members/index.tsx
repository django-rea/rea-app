/**
 * Members page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-04-06
 */

import * as React from 'react'
import ProjectTemplate from '@vflows/views/templates/ProjectTemplate'
import { AgentType } from '@vflows/bindings/agent/agent'
import MembersBig from '@vflows/views/organisms/MembersBig'
import BindNetwork from '@vflows/bindings/network/network'

interface Props {
  agent?: AgentType,
  loading: Boolean,
  error: Object,
  agentId: Number,
  router: {
    params: {
      id: string,
    },
  },
}

const MembersPage = BindNetwork(({ agent, loading, error, agentId,  router }: Props) => {
  console.log(agentId)
  console.log(error)
  console.log(agent)
  return (
  loading ? <strong>Loading...</strong> : (
    error ? <p style={{ color: '#F00' }}>API error</p> : (
      <MembersBig members={agent.agentRelationships} agentId={router.params.id} />
    ))
  )
})

export default MembersPage

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
import Sidebar from '@vflows/views/organisms/Sidebar'
import MembersBig from '@vflows/views/organisms/MembersBig'

interface Props {
  agent?: AgentType,
  router: {
    params: {
      id: string,
    },
  },
}

const MembersPage = ({ agent, router }: Props) => (
    <MembersBig members={agent.members} agentId={router.params.id} />
)

export default MembersPage

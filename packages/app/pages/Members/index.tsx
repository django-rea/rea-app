/**
 * Members page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-04-06
 */

import * as React from 'react'
import ProjectTemplate from '@vflows/views/templates/ProjectTemplate'

import Sidebar from '@vflows/views/organisms/Sidebar'
import MembersBig from '@vflows/views/organisms/MembersBig'

interface Props {
  router: {
    params: {
      id: string,
    },
  },
}

const MembersPage = ({ router }: Props) => (
    <MembersBig agentId={router.params.id} />
)

export default MembersPage

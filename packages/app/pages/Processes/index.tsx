/**
 * Processes page
 *
 * @package: REA app
 * @author:  ivan <bernini@inventati.org>
 * @since:   2017-05-06
 */

import * as React from 'react'
import { AgentType } from '@vflows/bindings/agent/agent'

interface Props {
  agent?: AgentType,
  router: {
    params: {
      id: string,
    },
  },
}

const ProcessesPage = ({ agent, router }: Props) => (
    <div>processi</div>
)

export default ProcessesPage

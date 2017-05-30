import * as React from 'react'

import PageTemplate from '@vflows/views/templates/PageTemplate'
import Input from '@vflows/views/atoms/Input'

const HomePage = () => {
  return (
    <PageTemplate>
      <h1>Hello World</h1>
      <form>
        <Input name="test" type="text" placeholder="Testing..." />
      </form>
    </PageTemplate>
  )
}

export default HomePage

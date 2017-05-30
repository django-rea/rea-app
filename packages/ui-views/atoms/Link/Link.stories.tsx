import * as React from 'react'
import { storiesOf } from '@kadira/storybook'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => (
    <Link />
  ))
  .add('active', () => (
    <Link active />
  ))

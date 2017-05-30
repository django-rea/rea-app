import * as React from 'react'
import { storiesOf } from '@kadira/storybook'
import IconButton from '.'

storiesOf('IconButton', module)
  .add('default', () => (
    <IconButton />
  ))
  .add('accent', () => (
    <IconButton accent />
  ))
  .add('primary', () => (
    <IconButton raised primary />
  ))
  .add('secondary', () => (
    <IconButton flat primary />
  ))
  .add('disabled', () => (
    <IconButton disabled />
  ))

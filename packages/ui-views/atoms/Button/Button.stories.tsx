import * as React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from '.'

storiesOf('Button', module)
  .add('default', () => (
    <Button />
  ))
  .add('accent', () => (
    <Button accent />
  ))
  .add('primary', () => (
    <Button raised primary />
  ))
  .add('secondary', () => (
    <Button flat primary />
  ))
  .add('disabled', () => (
    <Button disabled />
  ))

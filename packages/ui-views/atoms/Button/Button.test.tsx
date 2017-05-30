import test from 'ava'
import * as React from 'react'
import { shallow } from 'enzyme'
import Button from '.'

const wrapper = shallow(<Button />)

test('should render', async t => {
  t.is(wrapper.length, 1)
})

import test from 'ava'
import * as React from 'react'
import { shallow } from 'enzyme'
import { Menu as Component } from '.'   // we only need to test 1 of them!

const wrapper = shallow(<Component />)

test('should render', async t => {
  t.is(wrapper.length, 1)
})

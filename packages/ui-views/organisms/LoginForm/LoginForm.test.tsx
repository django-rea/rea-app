import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'
import Component from '.'

import configureStore from 'redux-mock-store'

// rendered with a store injected since there are data dependencies
const wrapper = shallow(<Component store={configureStore([])({})} />)

test('should render', async t => {
  t.is(wrapper.length, 1)
})

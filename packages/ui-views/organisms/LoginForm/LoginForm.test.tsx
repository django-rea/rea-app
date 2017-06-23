import test from 'ava'
import * as React from 'react'
import { shallow } from 'enzyme'
import Component from '.'

import configureStore from 'redux-mock-store'

test('should render', async t => {
  // rendered with a store injected since there are data dependencies
  const wrapper = shallow(<Component store={await configureStore([])({})} />)

  t.is(wrapper.length, 1)
})

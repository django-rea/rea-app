import React from 'react'
import { shallow } from 'enzyme'
import Link from '.'

const wrap = (props = {}) => shallow(<Link {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap()
  expect(wrapper.find(Link)).toHaveLength(1)
})

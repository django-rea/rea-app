import React from 'react'
import { shallow } from 'enzyme'
import IconButton from '.'

const wrap = (props = {}) => shallow(<IconButton {...props} />).dive()

it('renders props when passed in', () => {
  const wrapper = wrap({ type: 'text' })
  expect(wrapper.find({ type: 'text' })).toHaveLength(1)
})

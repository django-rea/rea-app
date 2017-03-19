/**
 * SVG icon components
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 * @flow
 */

import React from 'react'

import { browser } from '../config'

const nullServerComponent = () => (<span />)

export const Menu = !browser ? nullServerComponent : require('material-design-icons/navigation/svg/production/ic_menu_24px.svg')
// Checkbox: require('material-design-icons/toggle/svg/production/ic_check_box_24px.svg'),
export const Checkbox = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_check_circle_24px.svg')

export const Person = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_account_circle_24px.svg')

export const Group = !browser ? nullServerComponent : require('material-design-icons/social/svg/production/ic_group_24px.svg')
export const GroupAdd = !browser ? nullServerComponent : require('material-design-icons/social/svg/production/ic_group_add_24px.svg')

export const Bank = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_account_balance_24px.svg')

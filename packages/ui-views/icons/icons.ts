/**
 * SVG icon components
 *
 * :TODO: remove `nullServerComponent` workaround and make this work serverside
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 */

import React from 'react'

const browser = typeof window !== 'undefined';

const nullServerComponent = () => (<span />)

export const FreedomCoopLogo = !browser ? nullServerComponent : require('./FC-logo-only.svg').default

export const Menu = !browser ? nullServerComponent : require('material-design-icons/navigation/svg/production/ic_menu_24px.svg').default
// Checkbox: require('material-design-icons/toggle/svg/production/ic_check_box_24px.svg').default
export const Checkbox = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_check_circle_24px.svg').default
export const Exit = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_exit_to_app_24px.svg').default

export const Person = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_account_circle_24px.svg').default

export const Group = !browser ? nullServerComponent : require('material-design-icons/social/svg/production/ic_group_24px.svg').default
export const GroupAdd = !browser ? nullServerComponent : require('material-design-icons/social/svg/production/ic_group_add_24px.svg').default

export const Bank = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_account_balance_24px.svg').default

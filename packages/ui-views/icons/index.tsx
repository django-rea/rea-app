/**
 * SVG icon components
 *
 * :TODO: remove `nullServerComponent` workaround and make this work serverside
 *
 * @package: OCP app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-03-19
 */

import * as React from 'react'

const browser = typeof window !== 'undefined';

const nullServerComponent = () => (<span />)

export const FreedomCoopLogo = !browser ? nullServerComponent : require('./FC-logo-only.svg').default

export const Menu = !browser ? nullServerComponent : require('./menu.svg').default
export const Search = !browser ? nullServerComponent : require('./search.svg').default
export const Up = !browser ? nullServerComponent : require('./up.svg').default
export const Down = !browser ? nullServerComponent : require('./down.svg').default
export const Calendar = !browser ? nullServerComponent : require('./calendar.svg').default
export const Users = !browser ? nullServerComponent : require('./users.svg').default
export const Check = !browser ? nullServerComponent : require('./check.svg').default
export const Inbox = !browser ? nullServerComponent : require('./inbox.svg').default
export const Edit = !browser ? nullServerComponent : require('./edit.svg').default
export const Activity = !browser ? nullServerComponent : require('./activity.svg').default
export const Heart = !browser ? nullServerComponent : require('./heart.svg').default
export const Bell = !browser ? nullServerComponent : require('./bell.svg').default
export const Horizontal = !browser ? nullServerComponent : require('./more-horizontal.svg').default
export const Vertical = !browser ? nullServerComponent : require('./more-vertical.svg').default
// Checkbox: require('material-design-icons/toggle/svg/production/ic_check_box_24px.svg').default

export const Checkbox = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_check_circle_24px.svg').default
export const Exit = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_exit_to_app_24px.svg').default

export const Person = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_account_circle_24px.svg').default

export const Group = !browser ? nullServerComponent : require('material-design-icons/social/svg/production/ic_group_24px.svg').default
export const GroupAdd = !browser ? nullServerComponent : require('material-design-icons/social/svg/production/ic_group_add_24px.svg').default

export const Bank = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_account_balance_24px.svg').default
export const Icon = !browser ? nullServerComponent : require('material-design-icons/action/svg/production/ic_account_balance_24px.svg').default

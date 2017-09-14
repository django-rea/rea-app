import themed from '../../themed'
import Component from './headerWrapper'
const styles = require("./index.scss")
import CurrentUser from '@vflows/bindings/user/CurrentUser'

const HeaderThemed = themed(Component, styles)
export default CurrentUser(HeaderThemed)

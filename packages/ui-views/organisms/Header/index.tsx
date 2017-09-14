import themed from '../../themed'
import Component from './header'
const styles = require("./index.scss")
import CurrentUser from '@vflows/bindings/user/CurrentUser'
import { withRouter } from 'react-router'

const HeaderThemed = withRouter(themed(Component, styles))
export default CurrentUser(HeaderThemed)

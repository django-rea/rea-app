import * as React from 'react'
import Header from './header'

class HeaderWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
    this.state = {
      visible: false
    }
  }
  toggleMenu () {
    this.setState({
      visible: !this.state.visible
    })
  }
  render() {
    return (
      <div>
        <Header
          toggleMenu={this.toggleMenu}
          visible={this.state.visible}
          {...this.props} />
      </div>
    )
  }
}

export default HeaderWrapper

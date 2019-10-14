import React from 'react';

function WithKeyNav(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        activeIndex: 0
      }

      this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    handleKeyDown(e) {
      e.preventDefault()

      if(e.keyCode === 39 && this.state.activeIndex < this.props.size - 1){
        this.setState({ activeIndex: this.state.activeIndex + 1 })
        this.props.onActiveIndexChange(this.state.activeIndex + 1)
      }

      if(e.keyCode === 37 && this.state.activeIndex > 0){
        this.setState({ activeIndex: this.state.activeIndex - 1 })
        this.props.onActiveIndexChange(this.state.activeIndex - 1)
      }

      if(e.keyCode === 13){
        this.props.onEnter(this.state.activeIndex)
      }
    }

    render() {
      return (
        <div tabIndex={0} onKeyDown={this.handleKeyDown}>
          <WrappedComponent activeIndex={this.state.activeIndex} {...this.props} />
        </div>
      )
    }
  }
}

export default WithKeyNav

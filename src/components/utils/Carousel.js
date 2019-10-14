import React from 'react';
import FlexContainer from './FlexContainer'
import List from './List'
import WithKeyNav from '../hoc/WithKeyNav'

const ListWithKeyNav = WithKeyNav(List)

class Carousel extends React.Component {
  render() {
    return (
      <div className="Carousel">
        <ListWithKeyNav size={this.props.children.length} onEnter={this.props.onEnter} onActiveIndexChange={this.props.onActiveIndexChange}>
          <FlexContainer>
            {this.props.children}
          </FlexContainer>
         </ListWithKeyNav>
      </div>
    );
  }
}

Carousel.defaultProps = {
  children: [],
  onActiveIndexChange: () => {},
  onEnter: () => {}
}

export default Carousel;

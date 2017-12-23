import React, { Component } from 'react';

class Spaceship extends Component {
  render() {
    return (
      <div>
        <h1>
          Name: {this.props.name}
        </h1>
        <h4>
          Speed: {this.props.speed}
        </h4>
        <h4>
          Rockets? {this.props.hasRockets}
        </h4>
        <h4>
          Colors:{' '}
          <ul>
            {this.props.colors.map((color, index) => {
              return (
                <li>
                  {color}
                </li>
              );
            })}
          </ul>
        </h4>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  speed: 'slow',
  colors: ['black', 'red']
};

export default Spaceship;

import React, { Component } from 'react'

class Brewery extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.brewery.name} ({this.props.brewery.id})
        </div>
      </div>
    )
  }
}

export default Brewery
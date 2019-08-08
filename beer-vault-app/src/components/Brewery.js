import React, { Component } from 'react'

class Brewery extends Component {
  render() {
    return (
      <div className="card">
        <div className="brewery">
          <h1>{this.props.brewery.name}</h1>
          <p className="address">{this.props.brewery.addressLine1}</p>
          <p className="address">{this.props.brewery.city}, {this.props.brewery.state} {this.props.brewery.zip}</p>
        </div>
      </div>
    )
  }
}

export default Brewery
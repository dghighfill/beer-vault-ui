import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Brewery from './Brewery'

const BREWERY_QUERY = gql `
{
  breweries {
    id
    name
    addressLine1
    addressLine2
    city
    state
    zip
  }
}
`
class BreweryList extends Component {
  render() {
    return (
      <Query query={BREWERY_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const breweriesToRender = data.breweries
    
          return (
            <div>
              {breweriesToRender.map( brewery => <Brewery key={brewery.id} brewery={brewery} />)}
            </div>
          )
        }}        
        
      </Query>
    )
  }
}

export default BreweryList
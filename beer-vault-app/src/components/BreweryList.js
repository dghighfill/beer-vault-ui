import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Brewery from './Brewery'
import './Brewery.css';

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

const breweriesToRender = [
  {
    id: "1",
    name: "Samuel Adams",
    addressLine1: "123 Nowhere",
    city: "Boston",
    state: "MA",
    zip: "12345"
  },
  {
    id: "2",
    name: "Boulavard Brewery",
    addressLine1: "123 Nowhere",
    city: "Kansas City",
    state: "MO",
    zip: "65432",
  },
]

class BreweryList extends Component {
  render() {

    // Use this Return for mock data.
    // return (
    //   <div>
    //     <div className="page_title">
    //       Dale's Beer Vault
    //     </div>
    //     {breweriesToRender.map( brewery => <Brewery key={brewery.id} brewery={brewery} />)}
    //   </div>
    // )

    // Use this return for the GraphQL
    return (
      <Query query={BREWERY_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const breweriesToRender = data.breweries
    
          return (
            <div>
              <div className="page_title">
                 Dale's Beer Vault
             </div>
              {breweriesToRender.map( brewery => <Brewery key={brewery.id} brewery={brewery} />)}
            </div>
          )
        }}        
        
      </Query>
    )
  }
}

export default BreweryList
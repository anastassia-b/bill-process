// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';


import React from 'react';
// import { Query } from "react-apollo";
import { withApollo, graphql, compose } from 'react-apollo';
import gql from "graphql-tag";

const getQuery = gql`
{
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

class QueryComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { client } = this.props;
        debugger;
        client.query({
            query: getQuery,
          })
        console.log("query finished!");
        
    }

    render() {

        return (
            <div>
                Okie dokie.
            </div>
        )

        // let rates = this.props.data.rates;
        // return (
        //     <div>
        //     <button onClick={() => refetch()}>Refresh</button>
        //     <ul>{rates && rates.map(rate => <li>{rate.currency}</li>)}</ul>
        //   </div> 
        // )
    }
}



export default withApollo(QueryComponent);



// import { ApolloConsumer } from "react-apollo";

// const WithApolloClient = () => (
//   <ApolloConsumer>
//     {client => "We have access to the client!" /* do stuff here */}
//   </ApolloConsumer>
// );

// class ExchangeRates extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
    
//         return (
//             <Query
//             query={gql`
//               {
//                 rates(currency: "USD") {
//                   currency
//                   rate
//                 }
//               }
//             `}
//           >
//             {({ loading, error, data }) => {
//               if (loading) return <p>Loading...</p>;
//               if (error) return <p>Error :(</p>;
        
//               return data.rates.map(({ currency, rate }) => (
//                 <div key={currency}>
//                   <p>{`${currency}: ${rate}`}</p>
//                 </div>
//               ));
//             }}
//           </Query>
//         )
//     }
// };

// export default withApollo(ExchangeRates);

// export default WithApolloClient;
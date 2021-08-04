import gql from 'graphql-tag';

// export const QUERY_ACTIVITY = gql`
//   query getActivities($activity: ID) {
//     activities(category: $category) {
//       _id
//       name
//       description
//       materials
//       setUpTime
//       tearDownTime {
//         _id
//       }
//     }
//   }
// `;

// export const QUERY_ALL_ACTIVITIES = gql`
//   {
//     activities {
//       _id
//       name
//       description
//       materials
//       setUpTime
//       tearDownTime {
//         name
//       }
//     }
//   }
// `;

// export const QUERY_USER = gql`
// {
//   user {
//     firstName
//     lastName
//       activities {
//         _id
//         name
//         description
//         materials
//         setUpTime
//         tearDownTime
//       }
//     }
//   }
// }
// `;


export const QUERY_SINGLE_ACTIVITY = gql`
query singleActivity($_id: ID!) {
    singleActivity(_id: $_id) {
        _id
        activityName
        description
        materials
        setUpTime
        tearDownTime
    }
  }
`;
import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


// export const ADD_ACTIVITY = gql`
//   mutation addOrder($products: [ID]!) {
//     addOrder(products: $products) {
//       purchaseDate
//       products {
//         _id
//       name
//       description
//       price
//       quantity
//       category {
//         name
//       } 
//       }
//     }
//   }
// `;

//DO NOT NEED THIS SINCE WE DO NOT HAVE SIGNUP!

// export const ADD_USER = gql`
//   mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
//     addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;
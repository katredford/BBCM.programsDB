import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`;

export const ADD_ACTIVITY = gql`
    mutation addActivity($activities: [ID]!) {
        addActivity(activities: $activities) {
            activities {
                _id
                description
                materials
                setUpTime
                tearDownTime
            }
        }
    }
`;
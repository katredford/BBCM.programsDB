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

export const ADD_ACTIVITY = gql`
    mutation addActivity($activityName: String!, $description: String, $materials: [String], $setUpTime: Int, $tearDownTime: Int, $categories: [String] ) {
        addActivity(activityName: $activityName, description: $description, materials: $materials, setUpTime: $setUpTime, tearDownTime: $tearDownTime, categories: $categories ) {
          _id 
          activityName
          description
          materials
          setUpTime
          tearDownTime
          categories
        }
    }
`;
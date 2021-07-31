import { gql } from '@apollo/client';

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
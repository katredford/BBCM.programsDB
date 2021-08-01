import { gql } from '@apollo/client';

export const QUERY_ACTIVITIES = gql`
    {
        activities {
            _id
            
        }
    }
`
import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

const ActivityList = ({ activities }) => {
    if(!activities || !activities.length) {
        return ( 
        <div className="noActivities">
            <h3>No Activities Yet</h3>
        </div>
        )
    }

    return (
        <div>
            {activities &&
                activities.map(activity => (
                    <div key={activity._id}>
                        <p>
                            <Link 
                                to={`/activities/${activity._id}`}
                            >
                                {activity.activityName}
                            </Link>
                        </p>
                        <p>
                            Description: {activity.description}
                        </p>
                        <p>
                            Materials: {activity.materials}
                        </p>
                        <p>
                            Set Up: {activity.setUpTime} min
                        </p>
                        <p>
                            Tear Down: {activity.tearDownTime} min
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default ActivityList;
import React from 'react';
import { Link } from 'react-router-dom';

const ActivityList = ({ activities }) => {
    if(!activities.length) {
        return <h3>No Activities Yet</h3>
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

// import React, { useEffect } from "react";
// import Activity from "../Activity";
// import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_ACTIVITY } from "../../utils/actions";
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_ACTIVITY } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";
// import spinner from "../../assets/spinner.gif"

// function ActivityList() {
//   const [state, dispatch] = useStoreContext();

//   const { currentActivity } = state;

//   const { loading, data } = useQuery(QUERY_ACTIVITY);

//   useEffect(() => {
//     if(data) {
//       dispatch({
//            type: UPDATE_ACTIVITY,
//           activities: data.activities
//         });
//         data.activities.forEach((product) => {
//           idbPromise('activities', 'put', product);
//         });
//     } else if (!loading) {
//       idbPromise('activities', 'get').then((activities) => {
//         dispatch({
//           type: UPDATE_ACTIVITY,
//          activities: activities
//        });
//       });
//     }
//   }, [data, loading, dispatch]);

//   function filterActivity() {
//     if (!currentCategory) {
//       return state.activities;
//     }

//     return state.activities.filter(product => product.category._id === currentCategory);
//   }

//   return (
//     <div className="my-2">
//       <h2>Your Activities:</h2>
//       {state.activities.length ? (
//         <div className="flex-row">
//             {filterActivities().map(activity => (
// //                 <Activity
// //                   key= {activity._id}
// //                   _id={activity._id}
// //                   name={product.name}
// // materials={activity.materials}
// // setUpTime={activity.setUpTime}
// // tearDownTime={tearDownTime}

//                 />
//             ))}
//         </div>
//       ) : (
//         <h3>You haven't added any activities yet!</h3>
//       )}
//       { loading ? 
//       <img src={spinner} alt="loading" />: null}
//     </div>
//   );
// }

// export default ActivityList;
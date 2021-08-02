// import React, { useEffect } from "react";
// import Activity from "../Activity";
// import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_ACTIVITY } from "../../utils/actions";
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_ACTIVITY } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";
// // import spinner from "../../assets/spinner.gif"

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
//         data.activities.forEach((activity) => {
//           idbPromise
//           ('activities', 'put', activity);
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
//     if (!currentActivity) {
//       return state.activities;
//     }

//     return state.activities.filter(activity => activity.category._id === currentActivity);
//   }

//   return (
//     <div className="my-2">
//       <h2>Your Activities:</h2>
//       {state.activities.length ? (
//         <div className="flex-row">
//             {filterActivity().map(activity => (
//                 <Activity
//                   key= {activity._id}
//                   _id={activity._id}
//                   name={activity.name}
// materials={activity.materials}
// setUpTime={activity.setUpTime}
// // tearDownTime={tearDownTime}

//                 />
//             ))}
//         </div>
//       ) : (
//         <h3>You haven't added any activities yet!</h3>
//       )}
//       {/* { loading ? 
//       <img src={spinner} alt="loading" />: null} */}
//     </div>
//   );
// }

// export default ActivityList;
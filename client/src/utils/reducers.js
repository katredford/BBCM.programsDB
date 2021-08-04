// import { useReducer } from "react";
// import { ADD_ACTIVITY } from "./actions";

// export const reducer = (state, action) => {
//     switch (action.type) {
//         case ADD_ACTIVITY:
//             return {
//                 ...state,
//                 activity: [...state.activity, action.activity]
//             };
//         default:
//             return state;
//     }
// }

// export function useActivityReducer (initialState) {
//     return useReducer(reducer, initialState)
// }

// export const reducer = (state, action) => {
//     switch (action.type) {
//         case UPDATE_ACTIVITY:
//             return {
//                 ...state,
//                 activities: [...action.activities],
//             };

//         case UPDATE_ACTIVITY:
//             return {
//                 ...state,
//                 activities: [...action.activities],
//             };

//         case UPDATE_CURRENT_ACTIVITY:
//             return {
//                 ...state,
//                 currentActivity: action.currentActivity
//             }

//         default:
//             return state;
//     }
// };

// export function useProductReducer(initialState) {
//     return useReducer(reducer, initialState)
// }
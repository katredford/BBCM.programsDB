import { useReducer } from "react";
import {
    ADD_ACTIVITY,
    UPDATE_ACTIVITY,
    //   REMOVE_ACTIVITY,
    //   UPDATE_CURRENT_ACTIVITY,
} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_ACTIVITY:
            return {
                ...state,
                activities: [...action.activities],
            };

        case ADD_ACTIVITY:
            return {
                ...state,
                activities: [...action.activities],
            };

        // case UPDATE_CURRENT_ACTIVITY:
        //     return {
        //         ...state,
        //         currentActivity: action.currentActivity
        //     }

        default:
            return state;
    }
};

export function useActivityReducer(initialState) {
    return useReducer(reducer, initialState)
}
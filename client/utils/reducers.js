import { useReducer } from "react";
import { ADD_ACTIVITY } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_ACTIVITY:
            return {
                ...state,
                activity: [...state.activity, action.activity]
            };
        default:
            return state;
    }
}

export function useActivityReducer (initialState) {
    return useReducer(reducer, initialState)
}

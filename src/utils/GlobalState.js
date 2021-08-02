import React, { createContext, useContext } from "react";
import { useActivityReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useActivityReducer({
        activities: []
    });
    console.log('THIS IS THE STATE', state);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useStoreContext(StoreContext);
};

export { StoreProvider, useStoreContext };
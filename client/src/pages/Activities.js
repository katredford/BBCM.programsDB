import React from "react";
// import Header from "../components/Header";
// import Hero from '../components/Hero';
import ActivityList from "../components/ActivityList";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALL_ACTIVITIES } from '../utils/queries';


const Home = () => {
    const { loading, data } = useQuery(QUERY_ALL_ACTIVITIES);
    const activities = data?.allActivities || [];

    return (
       <main>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <ActivityList activities={activities} />
                )}
            </div>
       </main>
    );
};

export default Home;
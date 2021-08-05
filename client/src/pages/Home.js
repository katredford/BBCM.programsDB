import React from "react";
import Header from "../components/Header";
import Hero from '../components/Hero';
import ActivityList from "../components/ActivityList";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALL_ACTIVITIES } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_ALL_ACTIVITIES);
    const activities = data?.allActivities || [];

    // const activities = [
    //     {
    //        activityName: 'testy',
    //        description: 'a;ghak;hgl;kj',
    //        materials: [ 'crying' ],
    //        setUpTime: 6,
    //        tearDownTime: 6,
    //        categories: [ 'sad' ]
    //     }
    // ]

    return (
       <main>
            <div>
                <Header />
                <Hero />
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <ActivityList activities={activities} />
                )}
                {/* <Nav /> */}
            </div>
       </main>
    );
};

export default Home;
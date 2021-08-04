import React from "react";
import Activity from "../components/Activity";
import ActivityForm from "../components/Form";
// import Nav from "../components/Nav";

const Home = () => {
    return (
        <div className="container">

            <ActivityForm />
            <Activity />
        </div>
    );
};

export default Home;
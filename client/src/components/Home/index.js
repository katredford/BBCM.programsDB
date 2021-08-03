import React from "react";
import Details from "../pages/Details";
import ActivityForm from "../pages/Form";


const Home = () => {
    return (
        <div className="container">
            <ActivityForm />
            <Details />
        </div>
    );
};

export default Home;
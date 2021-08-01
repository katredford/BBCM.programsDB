import React from "react";
import Activity from "../components/Activity";
import Form from "../components/Form";
import Nav from "../components/Nav";

const Home = () => {
    return (
        <div className="container">
            <Nav />
            <Form />
            <Activity />
        </div>
    );
};

export default Home;
import React from "react";
import Activity from "../components/Activity";
import Helmet from "react-helmet";


const Home = () => {
    return (
        <>
        <Helmet bodyAttributes={{class: "home"}} />

        <div className="container">
            <main>
                <Activity />
            </main>
        </div>
        </>
        
    );
};

export default Home;
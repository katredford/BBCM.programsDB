import React from "react";
import Activity from "../components/Activity";
import Form from "../components/Form";
import Nav from "../components/Nav";

const Home = () => {
    return (
        <div className="container">
            {/* <Header> */}
                <Nav />
            {/* </Header> */}
            
            <main>
                {/* <Activity /> */}
            </main>

            <Form />
        </div>
    );
};

export default Home;
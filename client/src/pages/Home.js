import React from "react";
import Header from "../components/Header";
import Hero from '../components/Hero';
import Form from "../components/Form";
// import Nav from "../components/Nav";
import ActivityList from "../components/ActivityList";

const Home = () => {
    return (
       <div>
           <Header />
           <Hero />
            <ActivityList />
           {/* <Nav /> */}
       </div>
    );
};

export default Home;
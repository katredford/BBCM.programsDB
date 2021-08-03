import React from "react";
//import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import './specialtyStyleCSS/details.css';

import {QUERY_SINGLE_ACTIVITY} from '../utils/queries'

import { gql, useQuery } from '@apollo/client';
function Detail(props) {

    console.log('this.props.match.params.id', props.match.params.id)

    const { loading, error, data } = useQuery(QUERY_SINGLE_ACTIVITY, {
        variables: { _id: props.match.params.id },
      });


      console.log('LOADING AND DATA', loading, data, error)

      if(loading) {
          return (<div> LOADING</div>)
      }

    // have a state that keepts track of what they are typing!

    // get all old activites from DB and siplay below
      
    return (
    <div className="details">
        <section className="top">
            <h3> {data.singleActivity.activityName}</h3>
            <div className="minutes">
                <p>SET UP: {data.singleActivity.setUpTime} MIN </p>
                <p>TEAR DOWN: {data.singleActivity.tearDownTime} MIN </p>
            </div>
        </section>
        <section className="supplies">
            <p>Description:\n{data.singleActivity.description} </p>
            <p>Tools/Materials:\n{data.singleActivity.materials} </p>
        </section>
    </div>
    );
}

export default Detail;
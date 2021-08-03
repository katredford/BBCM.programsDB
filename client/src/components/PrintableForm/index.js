import React from "react";
import { Link } from 'react-router-dom';

function printableForm = ({activityName, description, materials, setUpTime, tearDownTime}) => {
    return (
        <div>
            <h3>{activityName}</h3>
        </div>
    )
}
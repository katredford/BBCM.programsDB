// import react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ACTIVITY } from '../../utils/mutations';
import { QUERY_ALL_ACTIVITIES } from '../../utils/queries';


function ActivityForm() {
    // for all form fields
    const [formState, setFormState] = useState({activityName: "", description: "", materials: "", setUpTime: 0, tearDownTime: 0, categories: ""})

    const [addActivity, { error }] = useMutation(ADD_ACTIVITY, {
        update(cache, { data: { addActivity } }) {
            // read what is currently in the cache
            const {activities} = cache.readQuery({ query: QUERY_ALL_ACTIVITIES }) || {activities: []};
            console.log("----", activities)
            console.log("----", addActivity)

            // prepend the newest thought to the front of the array
            cache.writeQuery({
                query: QUERY_ALL_ACTIVITIES,
                data: { activities: [addActivity, ...activities ] }
            })
        }

    });

    const handleChange = (event) => {
        let {name, value} = event.target
        value = value.trim()

        if (name === 'setUpTime' || name === 'tearDownTime') {
            value = parseInt(value)
        }
        if (name === 'materials' || name === 'categories') {
            value = value.split(',').map(v => v.trim())
        }

        console.log(name, value)
        setFormState({...formState, [name]: value});
    }

    const handleSubmit = async event => {
        event.preventDefault()
        console.log('HERE IS FORM STATE', formState)

        try {
            // add activity to database
            await addActivity({
                variables: formState
            });
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <section>
            
            <h1>Enter Activity Info</h1>

            <form id="activity-form">
                {/* activity name input */}
                <span>
                    <label htmlFor="activityName">Activity Name</label>
                    <input type="text" placeholder="Activity Name" onChange={handleChange} name="activityName" id="activityName" className="form-input" />
                </span>

                {/* description textarea */}
                <span>
                    <label htmlFor="description">Description:</label>
                    <textarea placeholder="Description" onChange={handleChange} name="description" id="description" className="form-input" />
                </span>

                {/* mess index 1-5 rating scale */}
                {/* <span> */}
                    {/* <label htmlFor="mess-index">Mess Index:</label>
                    <input type="" placeholder="mess index" name="" id="" className="form-input" />
                </span> */}

                {/* safety index 1-5 rating scale */}
                {/* <span>
                    <label htmlFor=""></label>
                    <input type="" placeholder="safety index" name="" id="" className="form-input" />
                </span> */}

                {/* set up time dropdown with min ranges */}
                {/* input? or, how to accept input from dropdown menu onto generated output*/}
                <span>
                    <label htmlFor="setUpTime">Set Up</label>
                    <textarea name="setUpTime" placeholder="How many minutes?" id="setUpTime" className="form-input" onChange={handleChange}>

                    </textarea>
                </span>

                {/* tear down time dropdown with min ranges*/}
                <span>
                    <label htmlFor="tearDownTime">Tear Down</label>
                    <textarea name="tearDownTime" placeholder="How many minutes?" id="tearDownTime" className="form-input" onChange={handleChange}>
                    </textarea>
                </span>

                {/* tools/materials needed checklist */}
                <span>
                    <label htmlFor="materials">Tools/Materials Needed:</label>
                    <input type="text" placeholder="tools/materials" onChange={handleChange} name="materials" id="materials" className="form-input" />
                </span>

                {/* prompts maybe like add an extra field? */}
                {/* <span>
                    <label htmlFor="">Prompts:</label>
                    <input type="" placeholder="prompts" name="" id="" className="form-input" />
                </span> */}

                {/* learning objectives maybe like add an extra field? */}
                {/* <span>
                    <label htmlFor="">Learning Objectives:</label>
                    <input type="" placeholder="" name="" id="" className="form-input" />
                </span> */}

                {/* upload image - cloudinary? */}
                {/* <span>
                    <label htmlFor="">Upload Image</label>
                    <input type="" placeholder="" name="" id="" className="form-input" />
                </span> */}

                {/* can we hide the label when it comes to form output? */}
                {/* category/hashtag? need data type  */}
                <span>
                     <label htmlFor="categories">Categories/Hashtags</label>
                    <input type="text" placeholder="categories" onChange={handleChange} name="categories" id="categories" className="form-input" />
                </span>
                <button onClick={handleSubmit}>Create Activity Form</button>
            </form>
            
        </section>
    );
}

export default ActivityForm;
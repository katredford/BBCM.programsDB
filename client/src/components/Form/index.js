// import react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ACTIVITY } from '../../utils/mutations';
import { QUERY_ALL_ACTIVITIES } from '../../utils/queries';


function ActivityForm() {
    // for all form fields
    const [formState, setFormState] = useState({activityName: "", description: "", materials: "", setUpTime: 0, tearDownTime: 0, categories: ""})

    const [addActivity, { error }] = useMutation(ADD_ACTIVITY, {
        update(cache, { data: { addActivity } }) {
            // read what is currently in the cache
            const {allActivities} = cache.readQuery({ query: QUERY_ALL_ACTIVITIES }) || {allActivities: []};
            console.log("----", allActivities)
            console.log("----", addActivity)

            // prepend the newest thought to the front of the array
            cache.writeQuery({
                query: QUERY_ALL_ACTIVITIES,
                data: { allActivities: [addActivity, ...allActivities ] }
            })
            console.log('yello')
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
            <h1 className="form-header">Enter Activity Info</h1>
            <div className="activity-wrapper">
                <form id="activity-form">
                    {/* activity name input */}
                    <label htmlFor="activityName">Activity Name</label>
                    <input type="text" placeholder="Activity Name" onChange={handleChange} name="activityName" id="activityName" className="form-input" />

                    {/* description textarea */}
                    <label htmlFor="description">Description:</label>
                    <textarea placeholder="Description" onChange={handleChange} name="description" id="description" className="form-input" rows="5" />

                    {/* set up time--accepts number */}
                    <label htmlFor="setUpTime">Set Up</label>
                    <textarea name="setUpTime" placeholder="How many minutes?" id="setUpTime" className="form-input" onChange={handleChange} />

                    {/* tear down time --accepts number*/}
                    <label htmlFor="tearDownTime">Tear Down</label>
                    <textarea name="tearDownTime" placeholder="How many minutes?" id="tearDownTime" className="form-input" onChange={handleChange} />
                        

                    {/* tools/materials needed checklist */}
                    <label htmlFor="materials">Tools/Materials Needed:</label>
                    <input type="text" placeholder="tools/materials" onChange={handleChange} name="materials" id="materials" className="form-input" />

                    <label htmlFor="categories">Categories/Hashtags</label>
                    <input type="text" placeholder="categories" onChange={handleChange} name="categories" id="categories" className="form-input" />
                    <button onClick={handleSubmit}>Create Activity Form</button>
                </form>
            </div>
        </section>
    )}

export default ActivityForm;



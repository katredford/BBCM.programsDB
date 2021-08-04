// import react
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ACTIVITY } from '../../utils/mutations';
import { QUERY_ALL_ACTIVITIES } from '../../utils/queries';


function ActivityForm() {
    // for all form fields
    const [formState, setFormState] = useState({activityName: "", description: "", materials: "", setUpTime: "", tearDownTime: ""})

    const [addActivity, {error}] = useMutation(ADD_ACTIVITY, {
        update(cache, { data: { addActivity } }) {
            // read what is currently in the cache
            const { formState } = cache.readQuery({ query: QUERY_ALL_ACTIVITIES });

            // prepend the newest thought to the front of the array
            cache.writeQuery({
                query: QUERY_ALL_ACTIVITIES,
                data: { formState: [addActivity, ...formState ] }
            })
        }
    });

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormState({...formState, [name]: value});
    }

    const handleSubmit = async event => {
        event.preventDefault()
        console.log('HERE IS FORM STATE', formState)

        try {
            // add activity to database
            await addActivity({
                variables: { formState }
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
                    <label for="activityName">Activity Name</label>
                    <input type="text" placeholder="Activity Name" onChange={handleChange} name="activityName" id="name" class="form-input" />
                </span>

                {/* description textarea */}
                <span>
                    <label for="description">Description:</label>
                    <textarea placeholder="Description" onChange={handleChange} name="description" id="description" class="form-input" />
                </span>

                {/* mess index 1-5 rating scale */}
                {/* <span> */}
                    {/* <label for="mess-index">Mess Index:</label>
                    <input type="" placeholder="mess index" name="" id="" class="form-input" />
                </span> */}

                {/* safety index 1-5 rating scale */}
                {/* <span>
                    <label for=""></label>
                    <input type="" placeholder="safety index" name="" id="" class="form-input" />
                </span> */}

                {/* set up time dropdown with min ranges */}
                {/* input? or, how to accept input from dropdown menu onto generated output*/}
                <span>
                    <label for="setUpTime">Set Up</label>
                    <textarea name="setUpTime" placeholder="How many minutes?" id="setUpTime" class="form-input" onChange={handleChange}>

                    </textarea>
                </span>

                {/* tear down time dropdown with min ranges*/}
                <span>
                    <label for="tearDownTime">Tear Down</label>
                    <textarea name="tearDownTime" placeholder="How many minutes?" id="tearDownTime" class="form-input" onChange={handleChange}>
                    </textarea>
                </span>

                {/* tools/materials needed checklist */}
                <span>
                    <label for="materials">Tools/Materials Needed:</label>
                    <input type="text" placeholder="tools/materials" onChange={handleChange} name="materials" id="" class="form-input" />
                </span>

                {/* prompts maybe like add an extra field? */}
                {/* <span>
                    <label for="">Prompts:</label>
                    <input type="" placeholder="prompts" name="" id="" class="form-input" />
                </span> */}

                {/* learning objectives maybe like add an extra field? */}
                {/* <span>
                    <label for="">Learning Objectives:</label>
                    <input type="" placeholder="" name="" id="" class="form-input" />
                </span> */}

                {/* upload image - cloudinary? */}
                {/* <span>
                    <label for="">Upload Image</label>
                    <input type="" placeholder="" name="" id="" class="form-input" />
                </span> */}

                {/* can we hide the label when it comes to form output? */}
                {/* category/hashtag? need data type */}
                {/* <span> */}
                    {/* <label for="">Categories/Hashtags</label>
                    <input type="" placeholder="" name="" id="" class="form-input" />
                </span> */}
                <button onClick={handleSubmit}>Create Activity Form</button>
            </form>
            
        </section>
    );
}

export default ActivityForm;
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
// /* import React from 'react';
// import { useHistory } from 'react-router-dom';

// function ActivityForm() {
//     const history = useHistory();

//     const handleSubmit = function(e) {
//         e.preventDefault();
//         // submit form input to db here, then redirect to the home page "/"
//         history.push("/");
//     }; */

//     return (
//         <section>
            

           
//                 <form className="activity-form">
//                     {/* activity name input */}
//                     <label for="activityName">Activity Name</label>
//                     <input type="text" placeholder="Activity Name" name="activityName" id="name" className="form-input" />
                    
//                     {/* description textarea */}                    
//                     <label for="description">Description</label>
//                     <textarea placeholder="Description" name="description" id="description" className="form-input" rows="5"/>
                    
//                     {/* set up time dropdown with min ranges */}                    
//                     <label for="set-up">Set Up</label>
//                     <select name="set-up" id="setup-time" className="form-input">
//                         <option value="5 minutes">5 minutes</option>
//                         <option value="10 minutes">10 minutes</option>
//                         <option value="15 minutes">15 minutes</option>
//                         <option value="20 minutes">20 minutes</option>
//                     </select>
                        
//                     {/* tear down time dropdown with min ranges*/}                    
//                     <label for="tearDown">Tear Down</label>
//                     <select name="tearDown" className="form-input">
//                         <option value="5 minutes">5 minutes</option>
//                         <option value="10 minutes">10 minutes</option>
//                         <option value="15 minutes">15 minutes</option>
//                         <option value="20 minutes">20 minutes</option>
//                     </select>
                    
//                     {/* tools/materials needed */}                   
//                     <label for="toolsMaterials">Tools/Materials Needed</label>
//                     <input type="input" placeholder="Tools/Materials" name="toolsMaterials" className="form-input" />
                    
//                     {/* category/hashtag */}                    
//                     <label for="categories">Categories</label>
//                     <input type="input" placeholder="Categories" name="categories" className="form-input" />

//                     <button type="submit" onClick={handleSubmit}>Submit!</button>
//                 </form>
            
//         </section>
//     );
// }


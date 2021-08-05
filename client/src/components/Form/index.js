// import react
import React from 'react';
import { useHistory } from 'react-router-dom';

function ActivityForm() {
    const history = useHistory();

    const handleSubmit = function(e) {
        e.preventDefault();
        // submit form input to db here, then redirect to the home page "/"
        history.push("/");
    };

    return (
        <section>
            <h1 className="form-header">Enter Activity Info</h1>

            <div className="activity-wrapper">
                <form className="activity-form">
                    {/* activity name input */}
                    <label for="activityName">Activity Name</label>
                    <input type="text" placeholder="Activity Name" name="activityName" id="name" className="form-input" />
                    
                    {/* description textarea */}                    
                    <label for="description">Description</label>
                    <textarea placeholder="Description" name="description" id="description" className="form-input" rows="5"/>
                    
                    {/* set up time dropdown with min ranges */}                    
                    <label for="set-up">Set Up</label>
                    <select name="set-up" id="setup-time" className="form-input">
                        <option value="5 minutes">5 minutes</option>
                        <option value="10 minutes">10 minutes</option>
                        <option value="15 minutes">15 minutes</option>
                        <option value="20 minutes">20 minutes</option>
                    </select>
                        
                    {/* tear down time dropdown with min ranges*/}                    
                    <label for="tearDown">Tear Down</label>
                    <select name="tearDown" className="form-input">
                        <option value="5 minutes">5 minutes</option>
                        <option value="10 minutes">10 minutes</option>
                        <option value="15 minutes">15 minutes</option>
                        <option value="20 minutes">20 minutes</option>
                    </select>
                    
                    {/* tools/materials needed */}                   
                    <label for="toolsMaterials">Tools/Materials Needed</label>
                    <input type="input" placeholder="Tools/Materials" name="toolsMaterials" className="form-input" />
                    
                    {/* category/hashtag */}                    
                    <label for="categories">Categories</label>
                    <input type="input" placeholder="Categories" name="categories" className="form-input" />

                    <button type="submit" onClick={handleSubmit}>Submit!</button>
                </form>
            </div>
        </section>
    );
}

export default ActivityForm;
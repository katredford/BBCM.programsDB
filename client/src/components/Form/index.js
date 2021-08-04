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
        <section id="form-section">
            <h1>Enter Activity Info</h1>

            <span id="form-wrapper">
                <form id="activity-form">
                    {/* activity name input */}
                    <span className="full-width">
                        <label for="activity-name">Activity Name</label>
                        <input type="text" placeholder="Activity Name" name="activity-name" id="name" class="form-input" />
                    </span>

                    {/* mess index 1-5 rating scale */}
                    <span>
                        <label for="mess-index">Mess Index:</label>
                        <input type="" placeholder="mess index" name="" id="" class="form-input" />
                    </span>

                    {/* set up time dropdown with min ranges */}
                    {/* input? or, how to accept input from dropdown menu onto generated output*/}
                    <span>
                        <label for="set-up">Set Up</label>
                        <select name="set-up" id="setup-time" class="form-input">
                            <option value="5 minutes">5 minutes</option>
                            <option value="10 minutes">10 minutes</option>
                            <option value="15 minutes">15 minutes</option>
                            <option value="20 minutes">20 minutes</option>
                        </select>
                    </span>

                    {/* safety index 1-5 rating scale */}
                    <span>
                        <label for="">Safety Index:</label>
                        <input type="" placeholder="safety index" name="" id="" class="form-input" />
                    </span>

                    {/* tear down time dropdown with min ranges*/}
                    <span>
                        <label for="tear-down">Tear Down</label>
                        <select name="tear-down" id="tear-down" class="form-input">
                            <option value="5 minutes">5 minutes</option>
                            <option value="10 minutes">10 minutes</option>
                            <option value="15 minutes">15 minutes</option>
                            <option value="20 minutes">20 minutes</option>
                        </select>
                    </span>

                    {/* description textarea */}
                    <span className="full-width">
                        <label for="description">Description:</label>
                        <textarea placeholder="Description" name="description" id="description" class="form-input" />
                    </span>

                    {/* tools/materials needed checklist */}
                    <span>
                        <label for="">Tools/Materials Needed:</label>
                        <input type="" placeholder="tools/materials" name="" id="" class="form-input" />
                    </span>

                    {/* prompts maybe like add an extra field? */}
                    <span>
                        <label for="">Prompts:</label>
                        <input type="" placeholder="prompts" name="" id="" class="form-input" />
                    </span>

                    {/* learning objectives maybe like add an extra field? */}
                    <span>
                        <label for="">Learning Objectives:</label>
                        <input type="" placeholder="" name="" id="" class="form-input" />
                    </span>

                    {/* upload image - cloudinary? */}
                    <span>
                        <label for="">Upload Image</label>
                        <input type="" placeholder="" name="" id="" class="form-input" />
                    </span>

                    {/* can we hide the label when it comes to form output? */}
                    {/* category/hashtag? need data type */}
                    <span>
                        <label for="">Categories/Hashtags</label>
                        <input type="" placeholder="" name="" id="" class="form-input" />
                    </span>

                    <button type="submit" className="full-width" onClick={handleSubmit}>submit</button>
                </form>
            </span>
        </section>
    );
}

export default ActivityForm;